import React from 'react'
import {CategoryImg} from '../../utils/categoryImg'

export default function SimpleUI({data}) {
  return (
    <div className='mt-5 w-10/12'>
        <div className='border-1 h-16 rounded-2xl flex items-start justify-center  border-black flex-col px-8'>
          <div className='flex'>
            <div className='w-8 h-8'>
                {CategoryImg(data.category)}
            </div>
            <p>{data.storename}</p>
          </div>
          <hr className='w-full'/>
          <p>{`위치 : ${data.location}`}</p>
        </div>
    </div>
  )
}
