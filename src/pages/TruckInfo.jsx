import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import { PiSirenLight } from "react-icons/pi";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LuPencilLine } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

// 하드코딩된 가짜 데이터
const truckInfo = {
  "truckData": [
    {
      "id": 1,
      "name": "장한평역 3번출구 붕어빵",
      "likes": 10,
      "reports": 1,
      "category": "붕어빵",
      "contact": "미입력",
      "account": "미입력",
      "businessDays": "월,화,수,목,금,토",
      "menu": [
        {"name": "팥 붕어빵", "descrption": " 팥붕어빵 2개 1000원", "quantity":1, "price": 1000, "image":"https://imgur.com/s2dwyUW.jpg"},
        {"name": "슈크림 붕어빵", "descrption": "슈크림붕어빵 2개 1000원", "quantity":1, "price": 1000, "image":"https://imgur.com/sNeLzeq.jpg"},
        {"name": "슈크림 붕어빵", "descrption": "슈크림붕어빵 2개 1000원", "quantity":1, "price": 1000, "image":"https://imgur.com/sNeLzeq.jpg"}
      ],
      "reviews": [
        {"name": "이상연", "rating": 4, "comment": "붕어빵이 쫄깃하고 맛있었어요! 가격도 저렴하고 좋아요."},
        {"name": "조흥제", "rating": 3, "comment": "팥붕어빵이 맛있어요! 하지만 너무 불친절했어요"}
      ],
      "photo": "https://imgur.com/GINqQXK.jpg"
    }
  ]
};

export default function TruckInfo() {
  const { id } = useParams();
  const [truckData, setTruckData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 가짜 데이터 사용
        const truck = truckInfo.truckData.find((truckItem) => truckItem.id === parseInt(id, 10));
        console.log('truck:', truck);
        if (!truck) {
          throw new Error('Truck not found');
        }

        setTruckData(truck);
      } catch (error) {
        console.error('Error fetching truck data:', error.message);
        //setTruckData([]); // 에러 발생 시 빈 배열로 설정
      }
    };
    fetchData();
  }, [id]);

  console.log('id:', id); // id 값이 어떻게 변경되는지 확인
  console.log('truckData:', truckData); // truckData 값이 어떻게 변경되는지 확인
  if (!truckData || Object.keys(truckData).length === 0) {
    return <p>Loading... </p>;
  }   

  const handleAddToMenu = (index) => {
    console.log(`Add to menu: ${truckData.menu[index].name}`);
    setHoveredIndex(index);
  };

  const handleHoverMenu = (index) => {
    setHoveredIndex(index);
    setTruckData((prevData) => {
      const newMenu = [...prevData.menu];
      newMenu[index].hovered = true; 
      return {
        ...prevData,
        menu: newMenu,
      };
    });
  };
  
  const handleLeaveMenu = (index) => {
    setHoveredIndex(null);
    setTruckData((prevData) => {
      const newMenu = [...prevData.menu];
      newMenu[index].hovered = false; 
      return {
        ...prevData,
        menu: newMenu,
      };
    });
  };

    // 리뷰의 평균 평점을 동적으로 계산하기 위한 함수
    const calculateAverageRating = () => {
      if (truckData.reviews.length === 0) {
        return "리뷰없음";
      }
  
      // 리뷰의 총 평점 계산
      const totalRating = truckData.reviews.reduce((sum, review) => sum + review.rating, 0);
      // 총 평점을 리뷰 개수로 나눠 평균 계산
      return totalRating / truckData.reviews.length;
    };
  
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="w-screen flex-1 overflow-y-auto">
          { truckData.photo && (
            <img
            src={truckData.photo}
            alt="Truck Photo"
            style={{ width: '100%', height: 'auto', border: '1px solid #000' }}
            />
            )}
          <h3 className="text-2xl font-bold mt-4 mb-2 ml-5">{truckData.name}</h3>
          <div className="ml-5 flex items-center mb-1">
          <GiCheckMark style={{ color: 'blue' }} />
            <p className="ml-2 text-xs font-sans">{`좋아요가 ${truckData.likes}개 이상인 가게에요!`}</p>
          </div>
            <div className="bg-orange-200 h-1 w-full mt-2"></div>
            <div className="mt-2 mb-2 ml-8">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mb-1 mr-2">상세정보</h3>
            <div className="ml-auto flex items-center">
              <AiOutlineLike />
              <p className="mr-2 ml-1">{`${truckData.likes}`}</p>
              <PiSirenLight />
              <p className="mr-7 ml-1">{`${truckData.reports}`}</p>
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
            <p className="text-zinc-400 text-sm">메뉴를 클릭하면 가계부로 이동합니다</p>
          </div>
        </div>
      <div className="bg-gray-200 h-0.5 w-full mt-1 mb-1"></div>
      <ul>
      {truckData.menu.map((item, index) => (
        <div key={index}>
          <li
            className="relative transition duration-300 hover:bg-gray-200 ml-8 mr-8 mt-2 flex items-center"
            onMouseOver={() => handleHoverMenu(index)}
            onMouseOut={() => handleLeaveMenu(index)}
          >
            {/* 호버시 가운데 아이콘 노출 */}
            {hoveredIndex === index && (
              <>
              <div className="absolute inset-0 flex items-center justify-center">
              <BsCart4 className="w-8 h-8 text-black bg-white border border-black rounded-lg" />
              </div>
              </>
            )}

            <a href={`/accountBook`} className="w-full h-full absolute top-0 left-0" />
            <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mr-4 " /> 
            <div>
              <p>{item.name}</p>
              <p>{item.descrption}</p>
              <p>{item.price} 원</p>
            </div>
            <span
              onClick={() => handleAddToMenu(index)}
              className={`ml-auto cursor-pointer w-5 h-5 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* <img
                src={cartImage}
                alt="Add to menu"
                className={`w-5 h-5 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-1' : 'opacity-0'} pointer-events-none`}
              /> */}
            </span>
          </li>
          <div className="bg-gray-100 h-0.5 w-full"></div> {/* 하단 회색 줄 */}
        </div>
      ))}
    </ul>

    <div className="bg-orange-200 h-1 w-full"></div>
      <div className="flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mt-2 mb-2 ml-8">리뷰</h2>
        <p className="ml-2">
          <span className="text-yellow-500">★</span> 
          <span className="text-black">{` ${calculateAverageRating()}`}</span>
        </p>
      </div>
        <LuPencilLine className="text-right mr-5"/>
      </div>
      <div className="bg-gray-200 h-0.5 w-full"></div>
      <ul className="pl-8">
        {truckData.reviews.map((review, index) => (
          
          <li key={index} className="mb-5 mt-1 mr-2 flex items-center">
            {review.profileImage ? (
              <img src={review.profileImage} alt={`${review.name}'s Profile`} className="w-8 h-8 rounded-full mr-4" />
            ) : (
              <React.Fragment>
                {/* 리액트 아이콘을 사용하여 아이콘 대체 */}
                <CgProfile className="w-8 h-8 text-gray-300 mr-4" />
                {/* alt 텍스트 대체 */}
                <span className="sr-only">{`${review.name}'s Profile`}</span>
              </React.Fragment>
            )}            
            {/* <img src={reviewImage} alt="Reviewer" className="w-8 h-8 rounded-full mr-4" /> */}
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
    <Footer className="z-3 absolute bottom-0 w-full h-8%" />
  </div>
  );
};

