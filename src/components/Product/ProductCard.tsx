import { FC, useState } from "react";
import { Product } from "../../store/productsSlice";
import ProductPlaceholder from "../../assets/ProductPlaceholder.jpg";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    const [imgSrc, setImgSrc] = useState(product.image ?? ProductPlaceholder);

    return(
        <>  
            <Link to={`/product/${product.id}`} style={{ all: 'unset' }}>
                <article className={styles.card_article}>
                    <img 
                        src={imgSrc}
                        loading="lazy"
                        onError={() => setImgSrc(ProductPlaceholder)}
                        alt={product.name}
                        title={product.name}
                    />
                    <h2>{product.name}</h2>
                    <p>{`цена: ${product.price} ₽`}</p>
                    <p>{`ID: ${product.id}`}</p>
                </article>      
            </Link>
        </>
    )
}

export default ProductCard;