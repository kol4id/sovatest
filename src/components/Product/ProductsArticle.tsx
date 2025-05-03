import ProductsList from "./ProductsList";
import styles from './ProductArticle.module.scss'
import { useEffect } from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { PAGE_LIMIT } from "../../config";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Spinner/LoadingSpiner";
import { setCurrentPage } from "../../store/productSearchSlice";

const ProductsArticle = () => {
    const dispatch = useAppDispatch();
    const currentPage = useParams().page ?? '1';
    
    const page = useSelector((state: RootState) => state.productSearch.currentPage);    
    const productsLength = useSelector((state: RootState) => state.products.filteredProducts.length);
    const isLoading = useSelector((state: RootState) => state.products.isLoading);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    useEffect(() =>{
        dispatch(setCurrentPage(Number(currentPage)));
    }, [])

    if (isLoading) return <LoadingSpinner/>

    return (
        <>
            <main className={styles.main_section}>
                <ProductsList page={page}/>
                <Pagination
                    totalPages={Math.ceil(productsLength / PAGE_LIMIT)}
                    currentPage={page}
                />
            </main>
        </>
    )
}

export default ProductsArticle;
