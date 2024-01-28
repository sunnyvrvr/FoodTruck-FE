import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegStar,FaRegBuilding } from "react-icons/fa";

export default function Location({data, type}) {

  const handleIcon=(type)=>{
    switch (type){
      case 'home':
        return <IoHomeOutline className='text-2xl'/>
      case 'company':
        return <FaRegBuilding className='text-2xl'/>
      case 'location':
        return <FaRegStar className='text-2xl'/>
    }
  }

  const handleAddress=()=>{
   if(data.address){
    return(
        <div>
      <p className='text-sm'>{`주소 :${data.address}`}</p>
      <div className='flex justify-around mt-5 '>
        <button className='border-1 border-black rounded-2xl w-1/4'>수정</button>
        <button className='border-1 border-black rounded-2xl w-1/4'>삭제</button>
      </div>
    </div>
    )
   }
   else{
    return(
    <div className='w-full flex justify-center mt-5'>
    <button className='border-1 border-black rounded-xl w-1/2 '>등록해주세요</button>
    </div>)
   }
  }

  return (
    <div className='h-1/5 w-5/6 mb-20 rounded-xl border-1 border-black p-5'>
      <div className='flex items-center'>
        <p>{handleIcon(type)}</p>
        <p className='ml-3 font-bold'>{data.name}</p>
      </div>
      <hr className='border-1 w-full my-2'/>
      {handleAddress()}
      
    </div>
  )
}
