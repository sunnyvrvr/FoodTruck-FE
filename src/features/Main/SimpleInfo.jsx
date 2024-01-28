import React from 'react';
import fish from '../../assets/fish.svg'


export default function SimpleInfo({data}) {



    return (
        <div className='w-10/12 h-36 bg-info rounded-2xl flex flex-col items-start px-8 py-2'>
            <div className=' flex items-center'>
            <img src={fish} alt="" className='w-10 h-10 rounded-full '/>
            <span className='font-semiboldtext-lg ml-3'>{data.storename}</span>
            </div>
            <hr className='w-11/12 border-gray-100 my-2'/>
            <div className='w-11/12 text-base mt-1'>
                <p>{`영업시간 : ${data.storetime[0]}~${data.storetime[1]}`}</p>
                <p className='whitespace-nowrap overflow-hidden overflow-ellipsis'>{`메뉴 : ${data.menu}`}</p>
            </div>
        </div>
    );
}

