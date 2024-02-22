import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllMovies = () => api.get(`/movies`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    getAllMovies,
    getMovieById,
}

export default apis