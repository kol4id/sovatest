import styles from "./EmptyProduct.module.scss";
import img404 from "../../assets/404.jpg";

// пустая страница товара
// отображается при отсутствии товара или при ошибке загрузки
const EmptyProduct = () => {
    return (
        <>
            <img src={img404} className={styles.image_container}/>
        </>
    )
}
export default EmptyProduct