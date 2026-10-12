import axios from "axios";

const api = axios.create({
    // Пустая строка из-за прокси
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json'
    },
});
// Подставляем токен если он есть
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});