import axios from 'axios';

const useAuthAxios = () => {
  const authAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Replace with your API base URL
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add an interceptor to include the authorization token in the headers
  authAxios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Assume token is stored in localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // CRUD operations
  const get = (url, config) => authAxios.get(url, config);
  const post = (url, data, config) => authAxios.post(url, data, config);
  const put = (url, data, config) => authAxios.put(url, data, config);
  const del = (url, config) => authAxios.delete(url, config);

  return { get, post, put, del };
};

export default useAuthAxios;
