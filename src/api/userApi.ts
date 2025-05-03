import axios, { AxiosInstance } from "axios";
import { User } from "../store/userSlice";


export class UserApi {
    private axiosInstance: AxiosInstance;
    
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
        });
    }

    async getUser(): Promise<User>{
        const response = await this.axiosInstance.get('/persons', {
            params: {
                _quantity: 1,
            },
        })
        return response.data?.data[0];
    }

    async getUsers(limit: number = 1): Promise<User[]> {
        const response = await this.axiosInstance.get('/persons', {
            params: {
                _quantity: limit,
            },
        })
        return response.data?.data;
    }
}