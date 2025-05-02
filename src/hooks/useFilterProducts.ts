import { useNavigate } from "react-router-dom"
import { RootState, useAppDispatch } from "../store/store"
import { useSelector } from "react-redux"
import { useMemo } from "react"
import { setFilteredProducts } from "../store/productsSlice"
import { setCurrentPage } from "../store/productSearchSlice"

const useFilterProducts = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const products = useSelector((state: RootState) => state.products.products)    
    const searchValue = useSelector((state: RootState) => state.productSearch.value)

    const filtered = useMemo(() =>{
        const value = searchValue.toLowerCase();
        const filteredProducts = products.filter((product) => {
            return (
                product.name.toLowerCase().includes(value) ||
                product.description.toLowerCase().includes(value) ||
                product.tags.some((tag) => tag.toLowerCase().includes(value))
            )
        })
        dispatch(setFilteredProducts(filteredProducts));

        if (value === '')  return filteredProducts;
        dispatch(setCurrentPage(1));
        navigate(`/products/1`)
        return filteredProducts;
    },[searchValue, products, dispatch])

    return filtered
}

export default useFilterProducts