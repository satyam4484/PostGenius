import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const axiosClient = (options: AxiosRequestConfig = {}): AxiosInstance => {
    // const token: string | null = localStorage.getItem("token");
    // if (token) {
    //     options.headers = { 
    //         ...options.headers, 
    //         Authorization: `Bearer ${token}` 
    //     };
    // }

    return axios.create({
        baseURL: "http://localhost:8000/api/",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // ...options.headers,
        }
    });
};

export default axiosClient;