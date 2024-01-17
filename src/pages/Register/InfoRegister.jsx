import React, { useEffect, useState } from 'react';
import { useTruckContext } from '../../context/TruckContext';
import { useLocation } from 'react-router-dom';
import RegisterMap from '../../features/Register/RegisterMap';
import Progress from '../../features/Register/Progress';
import Input from '../../components/Input';
import { geocoder } from '../../utils/geocoder';
import { getAddr } from '../../utils/adressName';
import DOWInput from '../../components/DOWInput';

export default function InfoRegister() {
    const location = useLocation();
    const [storeName, setStoreName] = useState();
    const [storeAddress, setStoreAddress] =useState();
    const [dowData, setDoWData] =useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [account, setAccount] = useState();
    const {kakao} =window;



    useEffect(() => {
        getAddr(location.state.location.lat,location.state.location.lng)
        .then(setStoreAddress)
        .catch(console.log)
    }, []);

    const handleSubmit=()=>{

    }

    // searchDetailAddrFromCoords(location.state.location, function(result, status){
    //     console.log(result)
    // })
    // console.log(location.state.location)
    return (
        <div className='w-screen h-xxl '>
            <div className='w-screen h-1/4'>
            <RegisterMap currentLocation={location.state.location}/>
            </div>
            <div className='w-screen px-7'>
            
                <Progress state={1}/>

                <Input label={'상호명'} setState={setStoreName}/>
                <div className='border-b-1 border-black '>
                    <div className='font-bold'>위치</div>
                    <div className='text-gray-500'>{storeAddress}</div>
                </div>
                <DOWInput state={dowData} setState={dowData} callback={handleSubmit}/>
                <Input label={'연락처'} setState={setPhoneNumber}/>
                <Input label={'계좌 번호'} setState={setAccount}/>
            </div>


        </div>
    );
}

