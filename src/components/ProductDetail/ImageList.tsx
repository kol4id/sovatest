import { FC } from "react";
import { SubImage } from "../../store/productsSlice";

interface ImageListProps {
    images: SubImage[];
}
const ImageList: FC<ImageListProps> = ({images}) => {
    return(
        <>
            <div style={{display: 'flex', gap: '10px'}}>
                {images.map((image, index) => (
                    <img 
                        key={index}
                        src={image.url} 
                        alt={`Image ${index + 1}`} 
                        style={{width: '100px', height: '100px', objectFit: 'cover'}}
                    />
                ))}
            </div>
        </>
    )
}
export default ImageList;