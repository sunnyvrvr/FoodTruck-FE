import React from 'react'
import { FaGear,FaPen  } from "react-icons/fa6";
import MyButton from '../../features/Mypage/MyButton';
import { TbSpeakerphone } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

export default function MyPage() {
  return (
    <div className='h-xxl w-screen'>
      <header className='flex justify-between h-xxs border-1 items-center text-xl w-full'>
        <div className='w-1/3'></div>
        <div className='w-1/3 flex justify-center font-semibold'>마이 페이지</div>
        <div className='w-1/3 flex justify-center'><FaGear /></div>
      </header>
      <div className='h-xxl '>
        <div className='h-2/5 border-1 flex flex-col items-center'>
            <div className='bg-gray-300 w-40 h-40 rounded-full mt-8'>

            </div>
            <div className='flex mt-8 items-center justify-center w-screen'>
              <p className='text-xl font-semibold w-auto border-b-1 border-stone-400' >이상연</p>
              {/* <p className='text-xl ml-3 absolute left-1/2'><FaPen /></p> */}
            </div>
        </div>

        <div className='h-3/5 border-1 grid grid-cols-2 grid-rows-2 justify-items-center items-center'>
            <MyButton content={'나의 제보'} icon={<TbSpeakerphone className='text-5xl'/>} link={'myRegister'}/>
            <MyButton content={'내가 쓴 리뷰'} icon={<MdOutlineRateReview  className='text-5xl'/>} link={'myReview'}/>
            <MyButton content={'장소 즐겨찾기'} icon={<MdLocationPin className='text-5xl'/>} link={'myLocation'}/>
            <MyButton content={'좋아요 누른 가게'} icon={<AiOutlineLike className='text-5xl'/>} link={'myFavorite'}/>
            <a href={`https://kauth.kakao.com/oauth/authorize?client_id=6f058c86db21168b8e6606ff565b4574&redirect_uri=https://www.yummytruck.store/auth/kakao/callback&response_type=code`}>로그인</a>
            {/* <a href={`https://kauth.kakao.com/oauth/authorize?client_id=6f058c86db21168b8e6606ff565b4574&redirect_uri=http://localhost:4000/auth/kakao/callback&response_type=code`}>로그인</a> */}
            </div>
      </div>
    </div>
  )
}