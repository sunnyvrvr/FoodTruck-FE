import { Map, MapMarker } from "react-kakao-maps-sdk"
import Footer from "../components/Footer"
import { useEffect, useRef, useState } from "react";
import SimpleInfo from '../components/SimpleInfo'
import truckMarker from '../components/assets/marker_truck.png'
import currMarker from '../components/assets/marker_blue.png'

import Carousel from "../components/Carousel";
// import useKakaoLoader from "./useKakaoLoader"

export default function Main() {
  const [storeData, setStoreData] = useState();
  const [clickedStore, setClickedStore] = useState();

  useEffect(()=>{
    fetch('data/foodTruck.json')
    .then((res)=>res.json())
    .then((res)=>setStoreData(res.stores))
  },[])
  

  const {kakao} =window;
  const mapRef = useRef();
  const [searchData, setSearchData] = useState();
  const [dataList, setDataList]= useState();
  const [currentLocation, setCurrentLocation]= useState({
    lat:37.56383445090615,
    lng:126.99059423964209
  });
  const [currentAdress, setCurrentAdress]=useState();
  useEffect(()=>{
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchData, (data,status,_pagination)=>{
      if(status === kakao.maps.services.Status.OK){
        const datas=[]
        data.forEach((item)=>{
          const itemInfo ={address : item.address_name, name: item.place_name, location: {x:item.x, y:item.y}}
          datas.push(itemInfo)
        })
        setDataList(datas)
      }
    })
  },[searchData])

  function handleSearch(item){
    const map = mapRef.current
    const lat = Number(item.location.y)
    const lng = Number(item.location.x)
    setCurrentLocation({lat: lat,lng: lng})
    setCurrentAdress(item.address)
    map.setLevel(2)
    document.querySelector('#searchBox').style.display='none';
  }

  function handleReset(){
    document.querySelector('#searchBox').style.display='block';
    setCurrentAdress('')
    setCurrentLocation({ lat:37.56383445090615, lng:126.99059423964209})
  }

  function handleClicked(key){
    setClickedStore(key)
    console.log(key);
  }
  return (
    <div className="h-screen relative">
      <div className="h-xxl w-scree z-0 relative">
        <Map 
          id='map'
          center={currentLocation}   // 지도의 중심 좌표
          style={{ width: '100%', height: '100%' }} // 지도 크기
          level={7}      
          ref={mapRef}                             // 지도 확대 레벨
        >
        {currentLocation && <MapMarker 
        position={currentLocation} image={{src:currMarker, size: {width: 45, height: 55}}}
        />}

        {storeData &&  
        storeData.map((marker, index) => (
        <MapMarker
          onClick={()=>handleClicked(index)}
          key={index}
          position={marker.location}
          image={{
            src: truckMarker,
            size: { width: 45, height: 55 }
          }}
        >
        </MapMarker>
      ))
      }

        </Map>
      </div>
      <header id='searchBox'>
        <div className="w-screen absolute top-0 z-5  flex flex-col items-center">
          <input 
          className="z-3 border-2 border-black w-4/5 h-12 rounded-full mt-12 pl-5 " 
          type="text"
          placeholder="자신의 위치를 입력해주세요" 
          onChange={(e)=>{setSearchData(e.target.value)}}/>
        
        { searchData ?
        <div className="w-screen h-96 overflow-auto z-3">
          <ul className="bg-white border-2 border-black bg-opacity-70 flex flex-col items-center">
            { dataList?
              dataList.map((item, index)=>{
                return <li key={index} className="h-16 border-b-2 border  w-10/12 flex flex-col justify-center items-start hover:bg-black hover:bg-opacity-20" onClick={()=>{handleSearch(item)}}>
                  <p>{item.name}</p>
                  <p>{item.address}</p>
                </li>
              })
              :
              <li>검색 결과가 없습니다</li>
            }
            
          </ul>
        </div>
          : <></>
        }
        </div>
      </header>
      
      {currentAdress &&
      <div className="w-4/5 h-12 border-2 border-black absolute top-0 rounded-full bg-white left-1/2 -translate-x-1/2 mt-12 flex items-center justify-center font-bold" onClick={()=>{handleReset()}}> 
      {currentAdress}
      </div>
      }
      <div className="absolute bottom-20 z-10 w-screen flex h-1/5 justify-center">
        {currentAdress && <Carousel data={storeData}/>
        }
      </div>

      <Footer className='z-3 absolute bottom-0'/>


    </div>
  )
}

