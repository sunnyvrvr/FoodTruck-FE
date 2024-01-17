import React, { useState } from 'react';

export default function DOWInput({state, setState, callback}) {

    const [dow,setDow]=useState({
        '월' : false,
        '화' : false,
        '수' : false,
        '목' : false,
        '금' : false,
        '토' : false,
        '일' : false
    });
    const days = ['월','화','수','목','금','토','일']

    callback('asff')

    const handleClicked=(e)=>{
        setDow()
    }
 
    return (
        <div className='w-full flex justify-evenly'> 

            {days.map((item)=>{
               return  <button onClick={(e)=>handleClicked(e)} value={item} className='rounded-full border-1 border-line w-8 h-8 flex justify-center items-center text-sm font-bold'>{item}</button>
            })}
        </div>
    );
}

