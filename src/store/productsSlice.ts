import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWrapper } from "../utils/FetchWrapper";
import { ProductsApi } from "../api/productsApi";
import { API_URL } from "../config";

export interface Product {
    id: number;
    name: string;
    description: string;
    ean: string;
    upc: string;
    image: string;
    images: SubImage[];
    net_price: number;
    taxes: number;
    price: number;
    categories: number[];
    tags: string[];
}

export interface SubImage{
    title: string;
    description: string;
    url: string;
}

export interface ProductsState {
    products: Product[];
    filteredProducts: Product[];
    isLoading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    filteredProducts: [],
    isLoading: false,
    error: null,
};

const productsApi = new ProductsApi(API_URL);

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async(limit: number | undefined, {rejectWithValue})=>{
        return fetchWrapper(() => productsApi.getProducts(limit), rejectWithValue)
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setFilteredProducts: (state, action) => {
            state.filteredProducts = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
})

export const { setProducts, setFilteredProducts, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;