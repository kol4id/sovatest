import ProductsList from "./ProductsList";
import styles from './ProductArticle.module.scss'
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PAGE_LIMIT } from "../../config";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Spinner/LoadingSpiner";

const ProductsArticle = () => {
    const currentPage = useParams().page ?? '1';
    const [page, setPage] = useState(Number(currentPage));
    
    console.log(page);
    const productsLength = useSelector((state: RootState) => state.products.products.length);
    const isLoading = useSelector((state: RootState) => state.products.isLoading);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    if (isLoading) return <LoadingSpinner/>

    return (
        <>
            <main className={styles.main_section}>
                <ProductsList page={page}/>
                <Pagination
                    totalPages={Math.ceil(productsLength / PAGE_LIMIT)}
                    currentPage={page}
                    onPageChange={(page) => setPage(page)}
                />
            </main>
        </>
    )
}

export default ProductsArticle;
