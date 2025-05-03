import { Outlet } from 'react-router-dom'
import './App.css'
import useAppFetch from './hooks/useAppFetch'

function App() {
  useAppFetch();
  
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
