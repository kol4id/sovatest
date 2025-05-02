import { FC, useCallback, useState } from "react";
import ImageList from "./ImageList";
import { SubImage } from "../../store/productsSlice";
import styles from "./ImageSection.module.scss";

interface ImageListProps {
    images: SubImage[];
}

const ImageSection: FC<ImageListProps> = ({images}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handleImageSelect = useCallback((index: number) => {
        setImageIndex(index);
    }, []);

    const selectedImage = images[imageIndex] || images[0];

    return (
        <>
            <main className={styles.image_section}>
                <section className={styles.image_section_images}>
                    <ImageList images={images} onImageSelect={handleImageSelect}/>
                    <img 
                        className={styles.image_section_main_img}
                        src={selectedImage.url}
                    />
                </section>
                <article className={styles.image_section_description}>
                    <h3>{`Название: ${selectedImage.title}`}</h3>
                    <p>{`Описание: ${selectedImage.description}`}</p>
                </article>
            </main>
        </>
    )
}

export default ImageSection