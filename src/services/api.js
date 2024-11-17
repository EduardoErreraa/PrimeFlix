import axios, {} from "axios";

// Base da URL: https://api.themoviedb.org/3
// URL: movie/now_playing?api_key=a70c38af5d350c309d5a86da4e6d4411&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;