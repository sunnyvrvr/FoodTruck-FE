import './App.css';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen'>
        <Outlet />
    </div>
  );
}

export default App;
