import { Outlet } from 'react-router-dom'
import './App.css'
import useAppFetch from './hooks/useAppFetch'
import HomeHeader from './components/Header/HomeHeader';

function App() {
  useAppFetch();
  
  return (
    <>
      <HomeHeader/>
      <Outlet />
    </>
  )
}

export default App
