import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleInfo from './SimpleInfo'
import { useNavigate } from "react-router-dom";

export default function Carousel({data}){
  console.log(data)
  const usenavigate =useNavigate();

  function handleChange(index){
    console.log(data[index])
    console.log(index)
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
      <Slider {...settings}>
        {/* {data.forEach((tiem)=>{
            console.log(tiem)
        })} */}
        {data.map((item, index)=>{
        return <div className="w-screen h-36">
            <button onClick={()=>usenavigate(`foodTruck/${item.id}`)} className="w-full flex justify-center">
          <SimpleInfo  index={index} data={item} className=" w-11/12 h-36"/>
          </button>
        </div>
        })}
      </Slider>
    </div>
  );
}