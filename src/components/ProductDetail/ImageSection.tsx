import { FC, useCallback, useState } from "react";
import ImageList from "./ImageList";
import { SubImage } from "../../store/productsSlice";
import styles from "./ImageSection.module.scss";

interface ImageListProps {
    images: SubImage[];
}

/**
 * Отображает основное изображение и список дополнительных изображений.
 * При клике на изображение из списка, оно становится основным.
 * @param images - массив с объектами дополнительных изображений 
 */
const ImageSection: FC<ImageListProps> = ({images}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handleImageSelect = useCallback((index: number) => {
        setImageIndex(index);
    }, []);

    // текущее главное изображение
    const selectedImage = images[imageIndex] || images[0];

    return (
        <>
            <main className={styles.image_section}>
                <section className={styles.image_section_images}>
                    <ImageList images={images} onImageSelect={handleImageSelect}/>
                    <img 
                        alt={`Image: ${selectedImage.title}`}
                        className={styles.image_section_main_img}
                        src={selectedImage.url}
                    />
                </section>
                {/* у каждого дополнительного изображения есть название и описание*/}
                <article className={styles.image_section_description}>
                    <h3>{`Название: ${selectedImage.title}`}</h3>
                    <p>{`Описание: ${selectedImage.description}`}</p>
                </article>
            </main>
        </>
    )
}

export default ImageSection