import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductSearch {
    value: string;
    currentPage: number;
}

const initialState: ProductSearch = {
    value: "",
    currentPage: 1,
}

const productSearchSlice = createSlice({
    name: "productSearch",
    initialState,
    reducers: {
        // значение поиска товаров. Отвечает за фильтрацию товаров в ProductsList.tsx
        setProductSearchValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }
    },
})

export const { setProductSearchValue, setCurrentPage } = productSearchSlice.actions;
export default productSearchSlice.reducer;