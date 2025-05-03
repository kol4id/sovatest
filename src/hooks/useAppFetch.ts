import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { fetchProducts } from "../store/productsSlice";
import { fetchUser, setUserAuthorised } from "../store/userSlice";

/**
 * Данный хук используется для загрузки данных при открытии приложения.
 * можно добалять в него загрузку других данных
 * @returns {void}
 */
const useAppFetch = () => {
    const dispatch = useAppDispatch();
    const isAuthorised = Boolean(localStorage.getItem('isAuthorised'));

    useEffect(() =>{
        dispatch(fetchProducts(500));
        if (isAuthorised){
            dispatch(setUserAuthorised(true));
            dispatch(fetchUser());
        }
    },[])
}

export default useAppFetch;