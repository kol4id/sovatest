import styles from "./EmptyProduct.module.scss";
import img404 from "../../assets/404.jpg";
const EmptyProduct = () => {
    return (
        <>
            <img src={img404} className={styles.image_container}/>
        </>
    )
}
export default EmptyProduct