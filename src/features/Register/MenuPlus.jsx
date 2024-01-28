import React, { useEffect, useState } from 'react';
import CategoryButton from '../../components/CategoryButton';

export default function MenuPlus({num}) {
    const [category,setCategory]=useState();
    const [menuName, setMenuName]= useState();
    const [price, setPrice]=useState();
    const [isOpen, setIsOpen]= useState(true);

    const handleRegister=()=>{
        if(category && menuName && price){
            setIsOpen(false);
            const prev =JSON.parse(localStorage.getItem('menu'))
            console.log(prev)
            prev[num]={category:category, menuName:menuName, price:price}
            localStorage.setItem('menu', JSON.stringify(prev))
        }
        else{
            alert('모두 입력해주세요')
        }
    }



    return (
        <>
            <div onClick={()=>{setIsOpen(true)}} className={`menu relative flex justify-center -z-${num * 10} h-10 items-center`}>
                <div className='z-20 w-45 h-45'>
                <CategoryButton setState={setCategory} />
                </div>
                <input onChange={(e)=>setMenuName(e.target.value)} type="text" className='w-40 text-center z-10' placeholder='메뉴명'/>
                <input onChange={(e)=>setPrice(e.target.value)} type='number' className='w-16 text-center z-10' placeholder='가격'/>
            </div>
            <div className='w-full flex justify-center'>
            <button onClick={()=>handleRegister()} className={`${isOpen ? 'block' : 'hidden'} w-1/3 border-1 rounded-xl`}>등록</button>
            </div>
        </>
    );
}

