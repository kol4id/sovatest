import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState } from "../../store/store"
import EmptyProduct from "./EmptyProduct"
import ImageList from "./ImageList"
import LoadingSpinner from "../Spinner/LoadingSpiner"


const ProductDetails = () => {
    const id  = Number(useParams().id)
    const product = useSelector((state: RootState) => state.products.products.find((product) => product.id == id));
    const isLoading = useSelector((state: RootState) => state.products.isLoading);

    if (isLoading) return <LoadingSpinner/>
    if (product == undefined) return <EmptyProduct/>

    return (
        <>

            <ImageList images={product.images}/>
        </>
    )
}
export default ProductDetails