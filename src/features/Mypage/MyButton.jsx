import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyButton({icon, content, link}) {
    const navigate = useNavigate();
    const handleClicked = () =>{
        navigate(`/mypage/${link}`)
    }
  return (
    <button onClick={handleClicked} className='w-36 h-36 border-1 border-black shadow-lg rounded-xl flex flex-col items-center justify-center cursor-pointer'>
        <div>
            {icon}
        </div>
        <p className='text-lg font-bold'>{content}</p>
    </button>
  )
}
