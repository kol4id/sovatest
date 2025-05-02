import ProductCard from "./ProductCard"
import styles from "./ProductList.module.scss"
import { FC, useMemo } from "react"
import { PAGE_LIMIT } from "../../config"
import useFilterProducts from "../../hooks/useFilterProducts"

interface IProps{
    page?: number
}
const ProductsList: FC<IProps> = ({page = 1}) => {
    const filteredProducts = useFilterProducts();
    const productsByPage = useMemo(() => filteredProducts.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT), [filteredProducts, page]);
   
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