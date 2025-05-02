import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import { useAppDispatch } from './store/store';
import { fetchProducts } from './store/productsSlice';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(100)); 
  }, [dispatch]);
  
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
