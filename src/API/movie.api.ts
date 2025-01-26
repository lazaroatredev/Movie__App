import axios, { AxiosInstance } from "axios";  

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

if (!API_KEY) {  
  console.error("API_KEY is not defined. Check your environment variables.");  
}  

export const moviesAPI : AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
});