import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleInfo from '../components/SimpleInfo'

export default function Carousel({data}){
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full h-36">
      <Slider {...settings}>
        {/* {data.forEach((tiem)=>{
            console.log(tiem)
        })} */}
        {data.map((item)=>{
        return <div className="w-screen h-36">
            <div className="flex justify-center">
          <SimpleInfo data={item} className=" w-11/12 h-36"/>
          </div>
        </div>
        })}
      </Slider>
    </div>
  );
}