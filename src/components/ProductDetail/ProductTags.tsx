import { FC } from "react";
import styles from "./ProductTags.module.scss";

interface ProductTagsProps {
    tags: string[];
}

/**
 * Отображает теги товара.
 * @param tags - массив тегов
 */
const ProductTags: FC<ProductTagsProps> = ({tags}) => {
    return (
        <>
            <article className={styles.tags_container}>
                <span className={styles.tags_container_item} style={{fontSize: '24pt'}}>Теги: </span>
                {tags.map((tag, index) => (
                    <span
                        className={styles.tags_container_item}
                        key={index} 
                    >
                        {tag}
                    </span>
                ))}
            </article>
        </>
    )
}

export default ProductTags