import axios from 'axios';

const useAuthAxios = () => {

  const authAxios = axios.create({
    baseURL: 'http://192.168.246.74:8080/', // Replace with your API base URL
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // CRUD operations
  const get = (url, config) => authAxios.get(url, config);
  const post = (url, data, config) => authAxios.post(url, data, config);
  const put = (url, data, config) => authAxios.put(url, data, config);
  const del = (url, config) => authAxios.delete(url, config);

  return { get, post, put, del };
};

export default useAuthAxios;
