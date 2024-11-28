import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.citybik.es/v2/networks/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;