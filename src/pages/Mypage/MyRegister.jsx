import React, { useEffect, useState } from 'react'
import { myPage } from '../../apis/fake'
import SimpleUI from '../../features/Mypage/Register'
import Header from '../../layouts/header'

export default function MyRegister() {
  const [data,setData] = useState();


  useEffect(()=>{
    myPage('12345678','register')
      .then((res)=>{
        setData(res.data.register)
      })
  },[])

  console.log(data)
  return (
    <div className='h-full'>
      <Header title={'나의 제보'}/>
      <div className='h-xxl flex flex-col items-center overflow-y-auto'>
        {data && data.map((item,index)=>{
          return <SimpleUI data={item} index={index}/>
        })}
      </div>
    </div>
  )
}
