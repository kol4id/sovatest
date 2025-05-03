import { RootState, useAppDispatch } from "../store/store"
import { useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setFilteredProducts } from "../store/productsSlice"


const useFilterProducts = (isDispatch: boolean = true) => {
    const dispatch = useAppDispatch()

    const products = useSelector((state: RootState) => state.products.products)    
    const searchValue = useSelector((state: RootState) => state.productSearch.value)

    const filtered = useMemo(() =>{
        const value = searchValue.toLowerCase();
        return products.filter((product) => {
            return (
                product.name.toLowerCase().includes(value) ||
                product.description.toLowerCase().includes(value) ||
                product.tags.some((tag) => tag.toLowerCase().includes(value))
            )
        })
    },[searchValue, products])

    useEffect(() => {
        if (!isDispatch) return
        dispatch(setFilteredProducts(filtered));
    }, [filtered, dispatch, isDispatch]);

    return filtered
}

export default useFilterProducts