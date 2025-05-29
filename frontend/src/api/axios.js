import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      try {
        await axios.post('http://localhost:5000/api/auth/refresh', {}, { withCredentials: true });
        return api(error.config);
      } catch (err) {
        console.error('Erro ao renovar token', err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
