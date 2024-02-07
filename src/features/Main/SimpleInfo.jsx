import React from 'react';
import fish from '../../assets/fish.svg'


export default function SimpleInfo({data}) {
    const truckImages =  ['truck1.jpg', 'truck2.jpg', 'truck3.jpg', 'truck4.jpg', 'truck5.jpg', 'truck6.jpg', 'truck7.jpg', 'truck8.jpg', 'truck9.jpg']; 
    const randomTruckImage = truckImages[Math.floor(Math.random() * truckImages.length)];


    return (
        <div className='w-10/12 h-36 bg-progress rounded-2xl flex flex-col items-start px-8 py-2'>
            <div className=' flex items-center'>
            <img
          src={`${process.env.PUBLIC_URL}/assets/${randomTruckImage}`}
          alt="Truck Photo"
          className='w-10 h-10'
          />
            <span className='font-semiboldtext-lg ml-3'>{data.storename}</span>
            </div>
            <hr className='w-11/12 border-gray-100 my-2'/>
            <div className='w-11/12 text-base mt-1'>
                <p>{`영업시간 : ${data.storetime}`}</p>
                <p className='whitespace-nowrap overflow-hidden overflow-ellipsis'>{`메뉴 : ${data.menu ? data.menu : '메뉴 정보가 없음'}`}</p>
            </div>
        </div>
    );
}

