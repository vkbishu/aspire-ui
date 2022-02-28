import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/',
    timeout: 10000, // 10 seconds timeout
});

export default instance;