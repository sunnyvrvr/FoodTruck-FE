import React, { useEffect, useState } from 'react';

export default function DOWInput({init, setState}) {

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


    const handleClicked=(e)=>{
        const day = e.target.value
        setDow((prev)=>({
            ...prev,
            [day] : !prev[day]
        }))
    }
    useEffect(()=>{
        const dayOfWeek=[]
        days.forEach((item)=>{
            if(dow[item]){
                dayOfWeek.push(item)
            }
        })
        setState(dayOfWeek)
    },[dow])
 
    useEffect(()=>{
        console.log(init)
        if(init){
            init.forEach((item)=>{
                setDow((prev)=>({
                ...prev,
                [item] : !prev[init]
            })) 
            })
        }
    },[])

    return (
        <div className='w-full flex justify-evenly'> 
            {days.map((item)=>{
               return  <button onClick={(e)=>handleClicked(e)} value={item} className={`rounded-full border-1 border-line w-8 h-8 flex justify-center items-center text-sm ${dow[item] && 'bg-progress'}`}>{item}</button>
            })}
        </div>
    );
}

