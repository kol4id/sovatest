import axios, { AxiosInstance } from "axios";
import { Product } from "../store/productsSlice";


export class ProductsApi {
    private axiosInstance: AxiosInstance;
    
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
        });
    }

    async getProducts(limit: number = 10): Promise<Product[]> {
        const response = await this.axiosInstance.get('/products', {
            params: {
                _quantity: limit,
            },
        })
        return response.data?.data;
    }
}