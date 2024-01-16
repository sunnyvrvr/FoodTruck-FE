import React from 'react';
import { useTruckContext } from '../../context/TruckContext';

export default function InfoRegister() {
    const {registerInfo} = useTruckContext();
    console.log(registerInfo)
    return (
        <div>
            
        </div>
    );
}

