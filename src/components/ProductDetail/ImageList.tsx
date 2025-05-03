import { FC } from "react";
import { SubImage } from "../../store/productsSlice";
import styles from "./ImageList.module.scss";

interface ImageListProps {
    images: SubImage[];
    onImageSelect: (index: number) => void;
}

/**
 * Отображает вертикальный список изображений. 
 * При клике на изображение вызывается функция onImageSelect с индексом изображения.
 * @param images - массив с объектами дополнительных изображений 
 * @param onImageSelect - функция, которая вызывается при клике на изображение
 */
const ImageList: FC<ImageListProps> = ({images, onImageSelect}) => {

    return(
        <>
            <div className={styles.list_container}>
                {images.map((image, index) => (
                    <img 
                        className={styles.list_container_img}
                        key={index}
                        src={image.url} 
                        alt={`Image: ${image.title}`}
                        onClick={() => onImageSelect(index)} 
                    />
                ))}
            </div>
        </>
    )
}
export default ImageList;