import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { AiFillAccountBook } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-white w-screen h-xxs'>
      <ul className='w-screen h-full flex items-center border-t-1 border-black'>
        <Link to='/' className='flex flex-col items-center w-1/4 border-x-1'>
          <p><IoMdHome className='text-4xl'/></p>
          <p className='font-bold text-xs'>메인</p>
          </Link>
        <Link to='/register' className='flex flex-col items-center w-1/4 border-x-1'>
          <p><MdLocationPin className='text-4xl'/></p>
          <p className='font-bold text-xs'>등록</p>
          </Link>
        <Link to='/accountBook' className='flex flex-col items-center w-1/4 border-x-1'>
          <p><AiFillAccountBook className='text-4xl'/></p>
          <p className='font-bold text-xs'>가계부</p>
          </Link>
        <Link to='/mypage' className='flex flex-col items-center w-1/4 border-x-1'>
          <p><FaUser className='text-4xl'/></p>
          <p className='font-bold text-xs'>마이 페이지</p>
          </Link>
        {/* <Link to='/register'>등록</Link>
        <Link to='/accountBook'>가계부</Link>
        <Link to='/mypage'>마이</Link> */}
      </ul>
    </div>
  )
}