import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-white w-screen h-xsl'>
      <ul className='w-full h-full flex justify-between items-center px-8'>
        <Link to='/'>메인</Link>
        <Link to='/register'>등록</Link>
        <Link to='/accountBook'>가계부</Link>
        <Link to='/mypage'>마이</Link>
      </ul>
    </div>
  )
}
 