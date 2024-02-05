import React, { useEffect, useState } from 'react'
import { myPage } from '../../apis/fake'
import Location from '../../features/Mypage/Location'
import Header from '../../layouts/header'

export default function MyLocation() {
  const [data,setData] = useState(); 

  useEffect(()=>{
    myPage('123456789','location')
    .then((res)=>{
      console.log(res.data.location)
      setData(res.data.location)
    })
  },[])
  return (
    <div className='h-full'>
        <Header title={'장소 즐겨찾기'}/>
        <div className='h-xxl flex flex-col items-center mt-8'>
          {data && data.map((item,index)=>{
            return <Location data={item} index={index} type={item.type}/>
          })}
        </div>
    </div>
  )
}
