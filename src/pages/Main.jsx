import { Map, MapMarker } from "react-kakao-maps-sdk";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import SimpleInfo from '../features/Main/SimpleInfo';
import truckMarker from '../assets/marker_truck.png';
import currMarker from '../assets/marker_blue.png';

import Carousel from "../features/Main/Carousel";
import Serach from "../features/Main/Serach";
import { main } from "../apis/axios";
import Markerdesc from "../features/Main/Markerdesc";
import { Link, useNavigate } from "react-router-dom";
// import useKakaoLoader from "./useKakaoLoader"

export default function Main() {
  const mapRef = useRef();
  const usenavigate = useNavigate();
  const [storeData, setStoreData] = useState();
  const [clickedStore, setClickedStore] = useState();
  const [currentLocation, setCurrentLocation]= useState({
    lat:37.56383445090615,
    lng:126.99059423964209
  });
  const [currentAdress, setCurrentAdress]=useState();
  const [currentLevel, setCurrentLevel]= useState(1);
  const [myLocation, setMyLocation]= useState();
  const [forcusingTruck, setForcusingTruck]=useState();

  useEffect(()=>{
    main(currentLocation.lat,currentLocation.lng,currentLevel)
    .then(res=>{
      setStoreData(res.data)
      // console.log(res)
    })
  },[currentLocation,currentLevel])

  function handleReset(){
    document.querySelector('#searchBox').style.display='block';
    setCurrentAdress('')
    setCurrentLocation({ lat:37.56383445090615, lng:126.99059423964209})

  }

  function handleClicked(marker){
    usenavigate(`foodTruck/${marker.storeno}`)
  }
  return (
    <div className="h-screen relative">
      <div className="h-xxl w-scree z-0 relative">
        <Map 
          id='map'
          center={currentLocation}   // 지도의 중심 좌표
          style={{ width: '100%', height: '100%' }} // 지도 크기
          level={7}     
          onCenterChanged={(map)=>{
            setCurrentLevel(Math.ceil(map.getLevel()/3))
            setCurrentLocation({
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            })
          }} 
          ref={mapRef}                             // 지도 확대 레벨
        >
        {myLocation && <MapMarker 
        position={myLocation} image={{src:currMarker, size: {width: 45, height: 55}}}
        />}

        {storeData &&  
        storeData.map((marker, index) => (
        <MapMarker
          onClick={()=>handleClicked(marker)}
          key={index}
          position={{"lat":marker.latitude, "lng":marker.longitude}}
          image={{
            src: truckMarker,
            size: { width: 45, height: 55 }
          }}
          clickable={true}
        >
        {marker.storeno === forcusingTruck ? <Markerdesc data={marker}/> : ''}
        </MapMarker>
      ))
      }
        </Map>
      </div>

      <Serach mapRef={mapRef} setCurrentAdress={setCurrentAdress} setCurrentLocation={setCurrentLocation} setMyLocation={setMyLocation} />
      
      {currentAdress &&
      <>
        <div className="w-4/5 h-12 border-2 border-black absolute top-0 rounded-full bg-white left-1/2 -translate-x-1/2 mt-12 flex items-center justify-center font-bold" onClick={()=>{handleReset()}}> 
        {currentAdress}
        </div>
        <div className="absolute bottom-28 z-10 w-screen flex h-1/5 justify-center">
          {storeData && <Carousel data={storeData} setCurrentLocation={setCurrentLocation} setForcusingTruck={setForcusingTruck}/>}
        </div>
      </>
      }
      <Footer className='z-3 absolute bottom-0'/>


    </div>
  )
}

