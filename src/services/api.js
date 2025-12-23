import axios from "axios";

//axios instance for all backend api calls
const api = axios.create({
   baseURL: "http://localhost:8000",
});

api.interceptors.request.use((config) => {
   const saved = JSON.parse(localStorage.getItem("auth") || "null");
   const token = saved?.token;
   if (token) config.headers.Authorization = `Bearer ${token}`;
   return config;
});

export default api;
