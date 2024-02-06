import React from 'react'

export default function Review({data}) {
  return (
    <div className='mt-5 w-10/12'>
        <p className='text-gray-400'>11/12</p>
        <div className='border-1 h-auto rounded-2xl border-black p-3'>
            <p className='font-bold'>{data.storename}</p>
            <hr className='border-1'/>
            <div>
                <span className='text-yellow-400 '>★</span>
                <span className=''>{`${data.star}점`}</span>
                <p>{data.content}</p>
            </div>
        </div>
    </div>
  )
}
