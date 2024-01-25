import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Progress from '../../features/Register/Progress'
import RegisterMap from '../../features/Register/RegisterMap'
import { useNavigate } from 'react-router-dom';
import EXIF from 'exif-js';

export default function MarkRegister() {
    const navigate = useNavigate();
    const location = JSON.parse(localStorage.getItem('location'))

    const local1 =  JSON.parse(localStorage.getItem('menu'))
    const local2 =  JSON.parse(localStorage.getItem('infoRegister'))

    const ans = {}

    ans['location'] = location
    ans['info'] = local2
    ans['menu'] = local1

    console.log(ans)

  return (
    <div className='w-screen h-xxl relative'>

</div>
  )
}


