import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReviewPopup from '../components/ReviewPopup';
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import { PiSirenLight } from "react-icons/pi";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LuPencilLine } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { truckData as fetchTruckData } from '../apis/axios';
import { truckReview } from '../apis/axios';
import { truckComplain } from '../apis/axios';
import { truckGood } from '../apis/axios';
import { inputAccount } from '../apis/axios';

// import { purchaseData } from '../apis/axios';
import { Alert } from '../components/Alert';
import * as axiosApi from '../apis/axios'; 

export default function TruckInfo() {
  const [truckData, setTruckData] = useState(null);
  const [purchaseData, setPurchaseData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { storeno } = useParams();
  // const { id } = useParams(); //로그인 기능 구현 후 변경
  const id ='d41a74e1-985a-43d8-92c9-67ab2c7d7e9f';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTruckData(storeno);
        if (response.data.truckData && response.data.truckData.length > 0) {
          setTruckData(response.data.truckData[0]);
        } else {
          console.error("푸드트럭 데이터가 없습니다.");
        }
      } catch (error) {
        console.error("푸드트럭 데이터 로딩 오류 발생:", error.status);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [storeno]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log('id:', id); // id 값
  console.log('storeno:', storeno); // id 값
  console.log('truckData:', truckData); // truckData 값이 어떻게 변경되는지 확인

  // 메뉴 - 가계부추가 (x)
  const handleAddToMenu = (index) => {
    console.log(`Add to menu: ${truckData.menu[index].name}`);
    setHoveredIndex(index);
  };
  //호버 - 검은색 표시
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

    // 리뷰의 평균 평점
    const calculateAverageRating = () => {
      if (!truckData || !truckData.reviews || truckData.reviews.length === 0) {
        return "리뷰없음";
      }
      const totalRating = truckData.reviews.reduce((sum, review) => sum + review.rating, 0);
      return totalRating / truckData.reviews.length;
    };
    //리뷰 팝업 열기- 닫기
    const openReviewPopup = () => {
      setReviewPopupOpen(true);
    };
  
    const closeReviewPopup = () => {
      setReviewPopupOpen(false);
    };
  
    const submitReview = (reviewData) => {
      // 리뷰를 서버에 제출하는 로직을 추가할 수 있음 (x)
      console.log('Submitted Review:', reviewData);
    };  
  
    const handleClicked = ()=> {
      truckData('d41a74e1-985a-43d8-92c9-67ab2c7d7e9f', truckData.storeno)
      .then((res)=>{
        if (res.status) {
          truckData(truckData.storeno)
            .then((res) => setTruckData(res))
            .catch((error) => {
              console.errror('트럭 상세페이지 데이터 에러 발생:', error);
            })
        }
        purchaseData(purchaseData.id)
        .then((res)=>setPurchaseData(res))
      })
      .catch((error) => {
        console.error('가계부 페이지 이동 에러:', error);
      });
      // setShowAlert(true);
      navigate('/accountBook')
    }

    const handleLiked = () => {
      truckData('d41a74e1-985a-43d8-92c9-67ab2c7d7e9f', truckData.storeno)
      .then((res)=>{
        if (res.status){
          truckData(truckData.storeno)
          .then((res)=>setTruckData(res))
        }
      })
    }
    
    const handleComplain = () => {
      truckData('d41a74e1-985a-43d8-92c9-67ab2c7d7e9f', truckData.storeno)
      .then((res)=>{
        if (res.status){
          truckData(truckData.storeno)
          .then((res)=>setTruckData(res))
        }
      })
    }

  return (
    <div className="flex flex-col min-h-screen relative">
      {loading || !truckData? (
        <p>Loading... </p>
      ) : (
      <div className="w-screen h-xxl flex-1 overflow-y-auto">
        {/* 트럭 사진 렌더링 */}
        { truckData && truckData.photo && (
          <img
          src={truckData.photo}
          alt="Truck Photo"
          style={{ width: '100%', height: 'auto', border: '1px solid #000' }}
          />
        )}
          
        {/* 트럭 이름 */}
        <h3 className="text-2xl font-bold mt-4 mb-2 ml-5">{truckData?.storename}</h3>
          
        {/* 좋아요 및 신고 정보 */}
        <div className="ml-5 flex items-center mb-1">
        <GiCheckMark style={{ color: 'blue' }} />
          <p className="ml-2 text-xs font-sans">{`좋아요가 ${truckData.like}개 이상인 가게에요!`}</p>
        </div>
          <div className="bg-orange-200 h-1 w-full mt-2"></div>
          <div className="mt-2 mb-2 ml-8">
        <div className="flex items-center">
          <h3 className="text-2xl font-bold mb-1 mr-2">상세정보</h3>
          <div className="ml-auto flex items-center">
            <div onClick={handleLiked}>
              <AiOutlineLike />
            </div>
              <div className="mr-2 ml-1">{`${truckData.like}`}</div>
            <div onClick={handleComplain}>
              <PiSirenLight />
            </div>
              <div className="mr-7 ml-1">{`${truckData.report}`}</div>
          </div>
        </div>       
          <p>{`음식 카테고리: ${truckData.category}`}</p>
          <p>{`연락처: ${truckData.contact}`}</p>
          <p>{`계좌: ${truckData.account}`}</p>
          <p>{`영업 요일: ${truckData.businessDays}`}</p>
          <p>{`영업 시간: ${truckData.businessTime}`}</p>            
        </div>

      {/* 메뉴 */}
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
          >
            {/* 호버시 가운데 아이콘 노출 */}
            {hoveredIndex === index && (
              <>
              <div className="absolute inset-0 flex items-center justify-center">
              <BsCart4 className="w-8 h-8 text-black bg-white border border-black rounded-lg" />
              </div>
              </>
            )}

            <div onClick={handleClicked} className="w-full h-full absolute top-0 left-0" />
              {/* <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mr-4 border-2" />  */}
              <div>
                <p className ="font-semibold text-lg mb-0.5">{item.name}</p>
                <p className ="text-slate-600 text-sm mb-0.2">{item.descrption}</p>
                <p className ="text-slate-950 text-base mt-0.2">{item.price} 원</p>
              </div>
              <span
                onClick={() => handleAddToMenu(index)}
                className={`ml-auto cursor-pointer w-5 h-5 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >
              </span>
            </li>
            <div className="bg-gray-100 h-0.5 w-full"></div> {/* 하단 회색 줄 */}
          </div>
        ))}
      </ul>   

      {/* 리뷰 */}
      <div className="bg-orange-200 h-1 w-full"></div>
      <div className="flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mt-2 mb-2 ml-8">리뷰</h2>
        <p className="ml-2">
          <span className="text-yellow-500">★</span> 
          <span className="text-black">{` ${calculateAverageRating()}`}</span>
        </p>
      </div>
        <LuPencilLine className="text-right mr-5 cursor-pointer"
          onClick={openReviewPopup}/>
        <ReviewPopup isOpen={isReviewPopupOpen} onClose={closeReviewPopup} onSubmit={submitReview} /> 
      </div>
      <div className="bg-gray-200 h-0.5 w-full"></div>

      <ul className="pl-8">
        {truckData && truckData.review && truckData.review.length > 0 ? (
          truckData.review.map((review, index) => (
            <li key={index} className="mb-5 mt-1 mr-2 flex items-center">
              {review.profileImage ? (
                <img src={review.profileImage} alt={`${review.name}'s Profile`} className="w-8 h-8 rounded-full mr-4" />
              ) : (
                <React.Fragment>
                  {/* 리액트 아이콘을 사용하여 아이콘 대체 */}
                  <CgProfile className="w-8 h-8 text-gray-300 mr-4" />
                  {/* alt 텍스트 대체 */}
                  {/* <span className="sr-only">{`${review.name}'s Profile`}</span> */}
                </React.Fragment>
              )}            
              <div className="flex flex-col">
                <div className="flex items-center">
                  <p className="text-sm font-bold">{review.name}</p>
                  <p className="ml-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-${i < review.rating ? 'yellow' : 'gray'}-500 border-transparent border-solid border-2 `}
                      >
                        ★
                      </span>
                    ))}
                  </p>
                </div>
                <p className="mr-4">{review.comment}</p>
              </div>
            </li>
          ))
        ) : (
          <p>리뷰가 없습니다.</p>
        )}
      </ul>

      </div>
      )}
  </div>
  );
};
