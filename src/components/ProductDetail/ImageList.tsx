import { FC } from "react";
import { SubImage } from "../../store/productsSlice";
import styles from "./ImageList.module.scss";

interface ImageListProps {
    images: SubImage[];
    onImageSelect: (index: number) => void;
}
const ImageList: FC<ImageListProps> = ({images, onImageSelect}) => {

    return(
        <>
            <div className={styles.list_container}>
                {images.map((image, index) => (
                    <img 
                        className={styles.list_container_img}
                        key={index}
                        src={image.url} 
                        alt={`Image ${index + 1}`}
                        onClick={() => onImageSelect(index)} 
                    />
                ))}
            </div>
        </>
    )
}
export default ImageList;