import React from 'react';

export default function Button({context}) {
    return (
        <div className='w-full h-full rounded-full bg-background flex justify-center items-center text-white text-bold'>
            {context}
        </div>
    );
}

