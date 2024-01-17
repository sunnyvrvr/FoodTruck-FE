import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Progress from '../../features/Register/Progress'
import RegisterMap from '../../features/Register/RegisterMap'

export default function MenuRegister() {
    const location = useLocation();
  return (
    <div className='w-screen h-xxl '>
    <div className='w-screen h-1/3'>
    <RegisterMap currentLocation={location.state.location}/>
    </div>
    <div className='w-screen px-7'>
    
        <Progress state={2}/>

            <Button context={'다음으로'}/>
    </div>
</div>
  )
}
