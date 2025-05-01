import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import ProductCard from "./ProductCard"
import styles from "./ProductList.module.scss"
import { FC, useMemo } from "react"
import { PAGE_LIMIT } from "../../config"


interface IProps{
    page?: number
}
const ProductsList: FC<IProps> = ({page = 1}) => {

    const products = useSelector((state: RootState) => state.products.products)

    const productsByPage = useMemo(() => products.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT), [products, page]); 

    return (
        <>
            <ul className={styles.product_container}>
                {productsByPage.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProductsList