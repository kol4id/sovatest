import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { fetchProducts } from "../store/productsSlice";



const Home = () =>{
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    return(
        <>
            <div>TEST</div>
        </>
    )
}

export default Home;