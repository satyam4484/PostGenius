import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const axiosClient = (options: AxiosRequestConfig = {}): AxiosInstance => {
    // No need for token handling for local API routes
    return axios.create({
        baseURL: "", // Empty base URL since we're using relative paths for local API routes
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // ...options.headers,
        }
    });
};

export default axiosClient;