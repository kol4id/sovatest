import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { fetchProducts } from "../store/productsSlice";
import ProductsArticle from "../components/Product/ProductsArticle";

const Home = () =>{
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchProducts(100))
    },[])

    return(
        <>
            <ProductsArticle/>
        </>
    )
}

export default Home;