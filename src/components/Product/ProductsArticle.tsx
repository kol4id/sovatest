import ProductsList from "./ProductsList";
import styles from './ProductArticle.module.scss'

const ProductsArticle = () => {
    return (
        <>
            <main className={styles.main_section}>
                <ProductsList/>
            </main>
        </>
    )
}

export default ProductsArticle;
