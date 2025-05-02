import { FC } from "react"
import { Product } from "../../store/productsSlice"
import styles from "./ProductInfo.module.scss"

interface ProductInfoProps {
    product: Product
}

const ProductInfo: FC<ProductInfoProps> = ({product}) => {
    return (
        <>
            <article className={styles.product_info}>
                <h2>Информация о товаре</h2>
                <h1>{product.name}</h1>
                <p>{`Описание: ${product.description}`}</p>
                <ul className={styles.specs}>
                    <li className={styles.specs_item}>
                        <span className={styles.specs_label}>id</span>
                        <span className={styles.specs_dots}></span>
                        <span className={styles.specs_value}>{product.id}</span>
                    </li>
                    <li className={styles.specs_item}>
                        <span className={styles.specs_label}>ean</span>
                        <span className={styles.specs_dots}></span>
                        <span className={styles.specs_value}>{product.ean}</span>
                    </li>
                    <li className={styles.specs_item}>
                        <span className={styles.specs_label}>upc</span>
                        <span className={styles.specs_dots}></span>
                        <span className={styles.specs_value}>{product.upc}</span>
                    </li>
                    <li className={styles.specs_item}>
                        <span className={styles.specs_label}>средняя цена</span>
                        <span className={styles.specs_dots}></span>
                        <span className={styles.specs_value}>{`${product.net_price} ₽`}</span>
                    </li>
                    <li className={styles.specs_item}>
                        <span className={styles.specs_label}>цена</span>
                        <span className={styles.specs_dots}></span>
                        <span className={styles.specs_value}>{`${product.price} ₽`}</span>
                    </li>
                    <li className={styles.specs_item}>
                        <span className={styles.specs_label}>налог</span>
                        <span className={styles.specs_dots}></span>
                        <span className={styles.specs_value}>{product.taxes}</span>
                    </li>
                    <li className={styles.specs_item}>
                        <span className={styles.specs_label}>категории</span>
                        <span className={styles.specs_dots}></span>
                        <span className={styles.specs_value}>{product.categories.join(', ')}</span>
                    </li>
                </ul>
            </article>
        </>
    )
}
export default ProductInfo