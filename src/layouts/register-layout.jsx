import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import { TruckContextProvider } from '../context/TruckContext';

export default function ResigterLayout() {
    return (
        <TruckContextProvider>
        <div className='h-screen'>
            <Header title={'가게 등록'}/>
            <Outlet/>
        </div>
        </TruckContextProvider>
    );
}

