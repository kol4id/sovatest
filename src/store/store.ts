import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import products from "./productsSlice";
import productSearch from "./productSearchSlice";
import user from "./userSlice";

export const store = configureStore({
    reducer: {
        products: products,
        productSearch: productSearch,
        user: user,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;