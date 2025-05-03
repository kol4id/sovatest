import ProductCard from "./ProductCard"
import styles from "./ProductList.module.scss"
import { FC, useEffect, useMemo } from "react"
import { PAGE_LIMIT } from "../../config"
import useFilterProducts from "../../hooks/useFilterProducts"
import { useAppDispatch } from "../../store/store"
import { setCurrentPage } from "../../store/productSearchSlice"
import { useNavigate } from "react-router-dom"

interface IProps{
    page?: number
}

/**
 * компонент, отображающий постарничный список товаров
 * @param page - номер страницы, по умолчанию 1 
 */
const ProductsList: FC<IProps> = ({page = 1}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const filteredProducts = useFilterProducts();
    /**
     * Мемоизированный массив товаров, отфильтрованный и разбитый по текущей странице.
     * Вычисляет подмассив `filteredProducts` на основе текущей страницы и лимита.
     */
    const productsByPage = useMemo(() => filteredProducts.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT), [filteredProducts, page]);
   
    useEffect(()=>{
        dispatch(setCurrentPage(1));
        navigate(`/products/1`);
    },[filteredProducts, dispatch, navigate])

    // возвращаем надпись если фильтрация ничего не нашла
    if (!productsByPage.length) return (
        <h2 className={styles.nothing_h2}>НИЧЕГО НЕ НАЙДЕНО</h2>
    )

    return (
        <>
            <ul className={styles.product_container}>
                {productsByPage.map((product) => (
                    <li key={product.id} className={styles.product_container_item}>
                        <ProductCard product={product}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProductsList