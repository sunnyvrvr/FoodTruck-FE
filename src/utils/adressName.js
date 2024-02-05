export function getAddr(lat, lng) {
    return new Promise((resolve, reject) => {
      const { kakao } = window;
      let geocoder = new kakao.maps.services.Geocoder();
  
      let coord = new kakao.maps.LatLng(lat, lng);
      let callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const arr = { ...result };
          console.log(arr)
          const _arr = arr[0].address.address_name;
          resolve(_arr);
        } else {
          reject('Failed to get address');
        }
      };
  
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    });
  }
  