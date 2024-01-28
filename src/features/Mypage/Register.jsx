import React from 'react'
import {CategoryImg} from '../../utils/categoryImg'

export default function SimpleUI({data}) {
  return (
    <div className='mt-5 w-10/12'>
        <p className='text-gray-400'>11/12</p>
        <div className='border-1 h-16 rounded-2xl flex items-center  border-black '>
            <div className='w-8 h-8 ml-8 mr-2'>
                {CategoryImg(data.category)}
            </div>
            <p>{data.storename}</p>
            {data.address &&
              <hr v/>}
        </div>
    </div>
  )
}
