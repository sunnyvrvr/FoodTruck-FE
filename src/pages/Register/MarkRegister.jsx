import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Progress from '../../features/Register/Progress'
import RegisterMap from '../../features/Register/RegisterMap'
import { useNavigate } from 'react-router-dom';
import EXIF from 'exif-js';

export default function MarkRegister() {
    const navigate = useNavigate();
    const location = JSON.parse(localStorage.getItem('location'))


 
    

    function handleSkip(){
        navigate('/register/mark')
      }
      function handleNext(){
        navigate('/register/mark')
      }
  return (
    <div className='w-screen h-xxl relative'>
    <div className='w-screen h-1/3'>
    <RegisterMap currentLocation={location}/>
    </div>
    <div className='w-screen h-2/3  px-7'>
    
      <div className='h-xxl overflow-auto '>
        <Progress state={3}/>
      <div className='text-sm text-gray-400'>
        <p>가게 기준 30미터 이내에서 찍은 사진만 인증됩니다</p>
        <p>인증된 가게는 인증마크가 발급됩니다.</p>
        <div>
        </div>

      </div>
      </div>
    <div className='h-xxs w-full flex '>
      <button className='w-full' onClick={handleSkip}><Button context={'건너뛰기'}/></button>
      <button className='w-full' onClick={handleNext}><Button context={'등록하기'}/></button>
    </div>
    </div>
</div>
  )
}
