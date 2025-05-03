import { useSelector } from "react-redux";
import { setProductSearchValue } from "../../store/productSearchSlice";
import { RootState, useAppDispatch } from "../../store/store";
import styles from "./ProductSearch.module.scss";
import { useDebounce } from "../../hooks/useDebounce";
import { useState } from "react";

// строка поиска товаров, обновляет глобальное состояние
// с дебаунсом в 250мс
const ProductSearch = () => {
    const dispatch = useAppDispatch();
    const searchValue = useSelector((state: RootState) => state.productSearch.value);
    const [inputValue, setInputValue] = useState(searchValue);

    const handleDispatch = (value: string) => {
        dispatch(setProductSearchValue(value));
    }

    const debouncedDispatch = useDebounce(handleDispatch, 250);

    const handleSearchChange = (value: string) => {
        setInputValue(value);
        debouncedDispatch(value);
    }

    return (
        <>
            <input
                className={styles.search_input}
                type="text"
                placeholder="Поиск товара"
                value={inputValue}
                onChange={e => handleSearchChange(e.target.value)}
            />
        </>
    )
}

export default ProductSearch