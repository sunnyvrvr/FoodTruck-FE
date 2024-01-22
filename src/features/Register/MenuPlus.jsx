import React from 'react';
import CategoryButton from '../../components/CategoryButton';

export default function MenuPlus({setState}) {
    return (
        <div className='flex justify-center z-10 h-10 items-center'>
            <div className='z-20 w-45 h-45'>
            <CategoryButton setState={setState}/>
            </div>
            <input type="text" className='w-40 text-center z-10' placeholder='메뉴명'/>
            <input type='number' className='w-16 text-center z-10' placeholder='가격'/>
        </div>
    );
}

