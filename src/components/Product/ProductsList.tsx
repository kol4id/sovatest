import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import ProductCard from "./ProductCard"
import styles from "./ProductList.module.scss"

const ProductsList = () => {

    const products = useSelector((state: RootState) => state.products.products)

    return (
        <>
            <ul className={styles.product_container}>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProductsList