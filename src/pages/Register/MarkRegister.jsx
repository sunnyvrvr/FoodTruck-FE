import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Progress from '../../features/Register/Progress'
import RegisterMap from '../../features/Register/RegisterMap'
import { useNavigate } from 'react-router-dom';
import EXIF from 'exif-js';

export default function MarkRegister() {
    const navigate = useNavigate();
    const location = JSON.parse(localStorage.getItem('location'))
    const local1 =  JSON.parse(localStorage.getItem('menu'))
    const local2 =  JSON.parse(localStorage.getItem('infoRegister'))

    const ans = {}
    ans['location'] = location
    ans['info'] = local2
    ans['menu'] = local1

    const handleSubmit=()=>{
      localStorage.removeItem('menu')
      localStorage.removeItem('location')
      localStorage.removeItem('infoRegister')
      navigate('/')
    }

  return (
    <div className='w-screen h-xxl relative'>
    <div className='w-screen h-1/3'>
    <RegisterMap currentLocation={location}/>
    </div>
    <div className='w-screen h-2/3  px-7'>
    
      <div className='h-xxl overflow-auto flex flex-col items-center '>
        <Progress state={3}/>
        <div className='text-sm text-gray-400 my-4'>
          <p>가게 기준 30미터 이내에서 찍은 사진만 인증됩니다.</p>
          <p>인증된 가게는 인증마크가 발급됩니다.</p>
        </div>

        <p>사진 업로드</p>
        <div className='w-11/12 border-1 h-2/5 bg-gray-300'>
        </div>
      </div>
    <div className='h-xxs w-full flex '>
      <button className='w-full' onClick={handleSubmit}><Button context={'등록하기'}/></button>
    </div>
    </div>
</div>
  )
}


