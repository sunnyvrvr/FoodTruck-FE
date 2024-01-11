import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import likeImage from '../assets/like.png';
import reviewImage from '../assets/review_member.png';
import reportImage from '../assets/report.png';
import cartImage from '../assets/cart.png';
import axios from 'axios';

// 하드코딩된 가짜 데이터

export default function TruckInfo() {
  const [truckData, setTruckData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // const fetchData = async () => {
  //   const truck = truckInfo.truckData;
  //   console.log('truck:', truck);
  //   setTruckData(truckInfo);
  // }

  useEffect(() => {
    axios('/data/TruckInfo.json')
    .then((res)=>{setTruckData(res.data.truckData)})
    }, []);
    
  if(!truckData){
    return <p>Loading...</p>
  } 
  return (
    <div className="flex flex-col h-screen relative">
      <div className="w-screen flex-1 overflow-y-auto">
        {console.log(truckData)}
        {console.log(truckData.account)}
            <img
            src={truckData.photo}
            alt="Truck Photo"
            style={{ width: '100%', height: 'auto', border: '1px solid #000' }}
            />
          <h3 className="text-2xl font-bold mt-4 mb-2 ml-5">{truckData.name}</h3>
          <div className="ml-5 flex items-center mb-1">
            <p className="text-blue-500 font-handwritten italic font-light">v</p>
            <p className="ml-2 text-sm font-sans">{`좋아요가 ${truckData.likes}개 이상인 가게에요!`}</p>
          </div>
            <div className="bg-orange-200 h-1 w-full mt-2"></div>
            <div className="mt-2 mb-2 ml-8">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mb-1 mr-2">상세정보</h3>
            <div className="ml-auto flex items-center">
              <img src={likeImage} alt="Like" className="w-4 h-4 mr-2" />
              <p className="mr-2">{`${truckData.likes}`}</p>
              <img src={reportImage} alt="Report" className="w-4 h-4 mr-2" />
              <p className="mr-10">{`${truckData.reports}`}</p>
            </div>
          </div>       
            <p>{`음식 카테고리: ${truckData.category}`}</p>
            <p>{`연락처: ${truckData.contact}`}</p>
            <p>{`계좌: ${truckData.account}`}</p>
            <p>{`영업 요일: ${truckData.businessDays}`}</p>
          
          </div>
      <div className="bg-orange-200 h-1 w-full mt-2"></div>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mt-2 mb-2 ml-8">메뉴</h2>
          <div className="ml-15 mt-2 pl-2">
            <p className="text-slate-400 text-sm">메뉴를 클릭하면 가계부로 이동합니다</p>
          </div>
        </div>
      <div className="bg-gray-200 h-0.5 w-full mt-1"></div>
      <ul>
      {truckData.menu && truckData.menu.map((item, index) => (
        <div key={index}>
          <li
            className="relative transition duration-300 hover:bg-gray-200 ml-8 mt-2 flex items-center"
            // onMouseOver={() => handleHoverMenu(index)}
            // onMouseOut={() => handleLeaveMenu(index)}
          >
            <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mr-4" /> 
            <div>
              <p>{item.name}</p>
              <p>{item.descrption}</p>
              <p>{item.price}</p>
            </div>
            <span
              // onClick={() => handleAddToMenu(index)}
              className={`ml-auto cursor-pointer w-5 h-5 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={cartImage}
                alt="Add to menu"
                className={`w-5 h-5 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-1' : 'opacity-0'} pointer-events-none`}
              />
            </span>
          </li>
          <div className="bg-gray-100 h-0.5 w-full"></div> {/* 하단 회색 줄 */}
        </div>
      ))}
    </ul>

      <div className="bg-orange-200 h-1 w-full"></div>
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mt-2 mb-2 ml-8">리뷰</h2>
        <p className="ml-2">
          <span className="text-yellow-500">★</span> 
          <span className="text-black">{` ${truckData.averageRating}`}</span>
        </p>
      </div>
      <div className="bg-gray-200 h-0.5 w-full"></div>
      <ul className="pl-8">
        {truckData.reviews && truckData.reviews.map((review, index) => (
          <li key={index} className="mb-8 flex items-center">
            <img src={reviewImage} alt="Reviewer" className="w-8 h-8 rounded-full mr-4" />
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="text-sm font-bold">{review.name}</p>
                <p className="ml-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-${i < review.rating ? 'yellow' : 'gray'}-500 border-transparent border-solid border-2`}
                    >
                      ★
                    </span>
                  ))}
                </p>
              </div>
              <p>{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>



      </div>
    {/* 푸터 높이 설정 */}
    <Footer className="z-3 absolute bottom-0 h-8%" />
  </div>
  );
};

