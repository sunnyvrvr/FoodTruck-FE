import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Progress from '../../features/Register/Progress'
import RegisterMap from '../../features/Register/RegisterMap'
import MenuPlus from '../../features/Register/MenuPlus'
import { CiSquarePlus } from "react-icons/ci";

export default function MenuRegister() {
    const navigate = useNavigate();
    const [menu,setMenu] = useState([]); 
    const [menuData,setMenuData] = useState();
    const location = JSON.parse(localStorage.getItem('location'))

    useEffect(()=>{
        const MenuList = localStorage.getItem('menu')
        if(MenuList){
          console.log(MenuList)
        }
        else{
          localStorage.setItem('menu',JSON.stringify([]))
        }
    },[])

    function handlePlus(){
      const num =menu.length
      setMenu(prev => [...prev, <MenuPlus key={prev.length} num={prev.length} />]);
      console.log(menu)
      console.log(num)
    }

    function handleSkip(){
        navigate('/register/mark')
      }
      function handleNext(){
        navigate('/register/mark')
      }
  return (
    <div className='w-screen h-xxl relative'>
    <div className='w-screen h-1/3'>
    <RegisterMap currentLocation={location}/>
    </div>
    <div className='w-screen h-2/3  px-7'>
    
      <div className='h-xxl overflow-auto '>
        <Progress state={2}/>

        <div className='flex justify-around pb-4'>
          <p className='w-16 flex justify-center'>카테고리</p>
          <p className='w-16 flex justify-center'>메뉴명</p>
          <p className='w-16 flex justify-center'>가격</p>
        </div>
        <hr className='w-full border-1 border-black'/>
        <div>
          {menu}
          <button onClick={()=>{handlePlus()}} className='mt-5 w-full flex justify-center'><CiSquarePlus className='text-3xl'/></button>
        </div>
      </div>
    <div className='h-xxs w-full flex '>
      <button className='w-full' onClick={handleSkip}><Button context={'건너뛰기'}/></button>
      <button className='w-full' onClick={handleNext}><Button context={'다음으로'}/></button>
    </div>
    </div>
</div>
  )
}
