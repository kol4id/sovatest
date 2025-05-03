import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { fetchProducts } from "../store/productsSlice";

/**
 * Данный хук используется для загрузки данных при открытии приложения.
 * можно добалять в него загрузку других данных
 * @returns {void}
 */
const useAppFetch = () => {
    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(fetchProducts(500)); 
    },[])
}

export default useAppFetch;