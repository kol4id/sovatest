import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserApi } from "../api/userApi";
import { API_URL } from "../config";
import { fetchWrapper } from "../utils/FetchWrapper";


export interface User{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    birthday: string,
    gender: string,
    address: Address,
    website: string,
    image: string
}

export interface Address{
    id: number,
    street: string,
    streetName: string,
    buildingNumber: string,
    city: string,
    zipcode: string,
    country: string,
    country_code: string,
    latitude: number,
    longitude: number
}

interface UserState{
    isAuthorised: boolean,
    userData: User | undefined,
    isLoading: boolean,
    error: string | null;
}

const initialState: UserState = {
    isAuthorised: false,
    userData: undefined,
    isLoading: false,
    error: null
}

const userApi = new UserApi(API_URL);

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async(_, {rejectWithValue})=>{
        return fetchWrapper(() => userApi.getUser(), rejectWithValue)
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAuthorised: (state, action) => {
            state.isAuthorised = action.payload
        },
        setUserData: (state, action) =>{
            state.userData = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder.
            addCase(fetchUser.pending, (state) =>{
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) =>{
                state.isLoading = true;
                state.error = action.payload as string;
            })
    }
})

export const { setUserAuthorised, setUserData } = userSlice.actions;
export default userSlice.reducer;
