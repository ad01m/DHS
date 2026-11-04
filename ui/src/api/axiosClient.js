import axios from 'axios'

// Backend API Base URL from environment variables (fallback to localhost for local testing)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor: Automatically attach JWT token if stored in localStorage
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('school_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosClient