import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './pages/Main';
import Register from './pages/Register/Register';
import Mypage from './pages/Mypage/MyPage';
import Favorite from './pages/Mypage/Favorite';
import MyRegister from './pages/Mypage/MyRegister';
import MyReview from './pages/Mypage/MyReview';
import TruckInfo from './pages/TruckInfo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AccountBook from './pages/AccountBook';
import Search from './pages/Search';
import BasicLayout from './layouts/basic-layout';
import ResigterLayout from './layouts/register-layout';
import InfoRegister from './pages/Register/InfoRegister';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      { index: true, element: <Main/> },
      { path: '/', element: <Main /> },
      { path: '/search/:location', element: <Search /> },
      { path: 'myPage', element: <Mypage /> },
      { path: 'myPage/favorite', element: <Favorite /> },
      { path: 'myPage/myRegister', element: <MyRegister /> },
      { path: 'myPage/myReview', element: <MyReview /> },
      { path: 'foodTruck/:truckId', element: <TruckInfo /> },
      { path: 'accountBook', element: <AccountBook /> },
    ],
  },
  {
    path: '/register',
    element: <ResigterLayout/>,
    children:[
      {index: true, element: <Register/>},
      {path: 'info', element: <InfoRegister/>}
    ]
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);