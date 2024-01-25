import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function RegisterMap({currentLocation}) {
    return (
        <Map
            center={currentLocation}
            style={{
                width : "100%",
                height: "100%" 
            }}
            level={3}
            > 
            <MapMarker position={currentLocation}/>
        </Map>
    );
}

