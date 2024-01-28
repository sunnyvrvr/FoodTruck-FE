import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import { TruckContextProvider } from '../context/TruckContext';
import Footer from './Footer';

export default function MyPageLayout() {
    return (
        <TruckContextProvider>
        <div className='h-screen'>
            <div className='h-xxl'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
        </TruckContextProvider>
    );
}

