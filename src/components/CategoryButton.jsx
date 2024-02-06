// src/Dropdown.js
import React, { useEffect, useRef, useState } from 'react';


const CategoryButton = ({setState}) => {
  const dropBoxRef =useRef();
  const [select, setSelect] = useState('카테고리')
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  

  const closeDropdown = (category) => {
    console.log(category)
    setState(category )
    setSelect(category)
    setIsOpen(false);
  };

  useEffect(() => {
    // 특정 영역 외 클릭 시 발생하는 이벤트
  function handleFocus(e) {
      if (dropBoxRef.current && !dropBoxRef.current.contains(e.target)) {
          // input 체크 해제
            setIsOpen(false);
        }
    }
    
    // 이벤트 리스너에 handleFocus 함수 등록
    document.addEventListener("mouseup", handleFocus);
    return () => { document.removeEventListener("mouseup", handleFocus); }
}, [dropBoxRef]);


  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className={`${select=='카테고리' ? 'text-gray-400' : 'text-black'} w-16 z-10 `}
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {select}
      </button>

      {isOpen && (
        <div
          ref={dropBoxRef}
          className="dropbox z-20 origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <div className="grid grid-cols-3 gap-2 ">
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('붕어빵')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/fishBread.png`} alt="" />
                    <p className='text-xs'>붕어빵</p>
                </div>
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('분식')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/snack.png`} alt="" />
                    <p className='text-xs'>분식</p>
                </div>
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('호떡')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/hodduck.png`} alt="" />
                    <p className='text-xs'>호떡</p>
                </div>
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('와플')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/waffle.png`} alt="" />
                    <p className='text-xs'>와플</p>
                </div>
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('문어빵')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/takoyaki.png`} alt="" />
                    <p className='text-xs'>문어빵</p>
                </div>
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('토스트')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/toast.png`} alt="" />
                    <p className='text-xs'>토스트</p>
                </div>
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('군고구마')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/sweet-potato.png`} alt="" />
                    <p className='text-xs'>군고구마</p>
                </div>
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('스테이크')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/steak.png`} alt="" />
                    <p className='text-xs'>스테이크</p>
                </div>
                <div className="h-16 w-16 flex flex-col items-center justify-center cursor-pointer" onClick={()=>closeDropdown('디저트')}>
                  <img className='w-10 h-10' src={`${process.env.PUBLIC_URL }/assets/dessert.png`} alt="" />
                    <p className='text-xs'>디저트</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryButton;
