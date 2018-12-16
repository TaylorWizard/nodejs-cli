import axios from 'axios'
import { baseURL } from "../config";

const axiosInstance = axios.create({
    baseURL,
    timeout: 1e4,
})

// Add a request interceptor
axiosInstance.interceptors.request.use(config => config,
    error => Promise.reject(error))

// Add a response interceptor
axiosInstance.interceptors.response.use(response => response.data,
    error => Promise.reject(error))

export default axiosInstance