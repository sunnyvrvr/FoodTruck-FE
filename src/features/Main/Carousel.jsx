import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleInfo from './SimpleInfo'
import { useNavigate } from "react-router-dom";

export default function Carousel({data, setCurrentLocation, setForcusingTruck, slideRef}){
  const usenavigate =useNavigate();

  function handleChange(index){
    const lat =data[index].latitude
    const lng = data[index].longitude
    console.log(lat,lng)
    console.log(data[index].storeno)
    setCurrentLocation({"lat":lat, "lng":lng})
    setForcusingTruck(data[index].storeno)
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul className="after:bg-white">{dots}</ul>
      </div>
    ),
    afterChange: current => handleChange(current)
  };
  return (
    <div className="w-full h-36">
      <Slider {...settings} ref={slideRef}>
        {data.map((item, index)=>{
        return <div className="w-screen h-36">
            <button onClick={()=>usenavigate(`foodTruck/${item.storeno}`)} className="w-full flex justify-center">
          <SimpleInfo  index={index} data={item} className=" w-11/12 h-36"/>
          </button>
        </div>
        })}
      </Slider>
    </div>
  );
}