import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function BasicLayout() {
  return (
    <div className='h-screen'>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default BasicLayout;



