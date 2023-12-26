import { Map } from "react-kakao-maps-sdk"
import Footer from "../components/Footer"
// import useKakaoLoader from "./useKakaoLoader"

export default function Main() {
  const {kakao} = window;
  // useKakaoLoader()
  console.log(kakao.maps.services.Places())

  return (
    <div className="h-xxl">
      <Map 
        id='map'
        center={{ lat: 37.56383445090615, lng: 126.99059423964209 }}   // 지도의 중심 좌표
        style={{ width: '100%', height: '100%' }} // 지도 크기
        level={7}                                   // 지도 확대 레벨
      >
      </Map>
      <Footer/>

    </div>
  )
}

