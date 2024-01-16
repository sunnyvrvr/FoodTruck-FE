
// 현재 위치 정보 가져오는 함수
export function geocoder(setState){
(navigator.geolocation.getCurrentPosition(function(position){
    const lat = position.coords.latitude
    const lng = position.coords.longitude

    console.log(lat,lng)
    lat 
    ? setState({lat:lat, lng:lng})
    : setState({ lat:37.56383445090615, lng:126.99059423964209})

  }))
}