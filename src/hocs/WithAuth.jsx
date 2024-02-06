import React, { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginAlert from '../components/LoginAlert';

const withAuth = (Component) => (props) => {
  const user = JSON.parse(localStorage.getItem('userId'));
  const userId = user?.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
        navigate('/login',{replace:true})
    }
  }, [userId]);

  if (userId) {
    console.log('로그인이 되어있음');
    return <Component {...props} />;
  }

  // 로그인이 되어 있지 않으면 여기서 처리 (예: 로그인 페이지로 리다이렉트)
  // navigate('/');
  navigate('/login')// 로그인이 되어 있지 않을 때 null 반환
};

export default withAuth;
