import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState } from "../../store/store"
import EmptyProduct from "./EmptyProduct"
import LoadingSpinner from "../Spinner/LoadingSpiner"
import ProductTags from "./ProductTags"
import ImageSection from "./ImageSection"
import styles from "./ProductDetails.module.scss"
import ProductInfo from "./ProductInfo"

// Отображает информацию о товаре, его изображение и онсновные характеристики.
const ProductDetails = () => {
    // получаем id товара из url
    // т.к. попадаем на страницу только по ссылке
    const id  = Number(useParams().id)
    const product = useSelector((state: RootState) => state.products.products.find((product) => product.id == id));
    const isLoading = useSelector((state: RootState) => state.products.isLoading);

    if (isLoading) return <LoadingSpinner/>
    if (product == undefined) return <EmptyProduct/>

    return (
        <>
            <article className={styles.product_section}>
                <section className={styles.product_section_container}>
                    {/* теги товара, можно реализовать бытсрый поиск по схожим тегам по нажатию */}
                    <ProductTags tags={product.tags}/>
                    <main className={styles.product_section_details}>
                        <ImageSection images={product.images}/>
                        <ProductInfo product={product}/>
                    </main>
                </section>
            </article>
        </>
    )
}
export default ProductDetails