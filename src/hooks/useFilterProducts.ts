import { RootState, useAppDispatch } from "../store/store"
import { useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setFilteredProducts } from "../store/productsSlice"


/**
 * Фильтрует массив продуктов по имени, описанию и тегам.
 * 
 * @param isDispatch диспатчить ли отфильтрованные продукты в Redux. По умолчанию true.
 * @returns Отфильтрованный массив продуктов
 */
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

    // Диспатчим отфильтрованные продукты в Redux, если isDispatch true
    useEffect(() => {
        if (!isDispatch) return
        dispatch(setFilteredProducts(filtered));
    }, [filtered, dispatch, isDispatch]);

    return filtered
}

export default useFilterProducts