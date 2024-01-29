import React from 'react'
import Button from './Button'

export default function Alert({alert, setAlert, content}) {
  console.log(alert)
  return (
    <div className={`w-11/12 h-1/3 border-1 border-background absolute top-1/4 z-10 left-1/2 -translate-x-1/2 rounded-lg bg-white flex flex-col items-center py-8 ${alert ? 'block' : 'hidden'}`}>
    <div className='font-bold text-xl flex flex-col items-center'>
        {content.map((item)=>{return <p>{item}</p>})}
    </div>
    <div onClick={()=>{setAlert(false)}} className={`w-5/6 h-1/6 mt-20`}>
        <Button context={'확인'}></Button>
    </div>
</div>
  )
}
