import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { fetchProducts } from "../store/productsSlice";

const useAppFetch = () => {
    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(fetchProducts(500)); 
    },[])
}

export default useAppFetch;