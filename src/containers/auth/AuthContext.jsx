/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../../hooks/useSnackbar';
import useAuthAxios from '../../hooks/useAuthAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const authAxios = useAuthAxios();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const showSnackbar = useSnackbar();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authAxios.post('login', credentials);
      setUser(response.data.data);
      setToken(response.data.token);

      localStorage.setItem('user', JSON.stringify(response.data.data));
      localStorage.setItem('token', response.data.token);

      navigate('/');
    } catch (error) {
      showSnackbar('error', 'Invalid email or password');
    }
  };

  const logout = async () => {
    try {
      await authAxios.post('logout');
      setUser(null);
      setToken(null);
      navigate('/login');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    } catch (error) {
      showSnackbar('error', 'Error during logout');
    }
  };

  const refresh = async () => {
    try {
      const response = await authAxios.post('refresh');
      setToken(response.data.access_token);
      localStorage.setItem('token', response.data.access_token);
    } catch (error) {
      showSnackbar('error', 'Error during token refresh');
      logout(); // Log out user if token refresh fails
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
