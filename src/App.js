import './App.css';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen'>
          <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
