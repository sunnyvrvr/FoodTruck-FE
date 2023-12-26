import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './pages/Main';
import Register from './pages/Register';
import Mypage from './pages/Mypage/MyPage';
import Favorite from './pages/Mypage/Favorite';
import MyRegister from './pages/Mypage/MyRegister';
import MyReview from './pages/Mypage/MyReview';
import TruckInfo from './pages/TruckInfo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AccountBook from './pages/AccountBook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main/> },
      { path: 'main', element: <Main /> },
      { path: 'register', element: <Register /> },
      { path: 'myPage', element: <Mypage /> },
      { path: 'myPage/favorite', element: <Favorite /> },
      { path: 'myPage/myRegister', element: <MyRegister /> },
      { path: 'myPage/myReview', element: <MyReview /> },
      { path: 'foodTrcuk', element: <TruckInfo /> },
      { path: 'accountBook', element: <AccountBook /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);