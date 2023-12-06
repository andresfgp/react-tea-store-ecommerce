/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from './hooks/useSnackbar';
import useAuthAxios from './hooks/useAuthAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const authAxios = useAuthAxios();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // New state for token
  const navigate = useNavigate();
  const showSnackbar = useSnackbar();

  // Check for user and token in local storage when the component mounts
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

      // Save user and token in local storage
      localStorage.setItem('user', JSON.stringify(response.data.data));
      localStorage.setItem('token', response.data.token);

      navigate('/');
    } catch (error) {
      showSnackbar('error', 'Invalid email or password');
    }
  };

  const logout = async () => {
    try {
      await authAxios.get('logout');
      setUser(null);
      setToken(null);
      navigate('/login');
      // Remove user and token from local storage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    } catch (error) {
      showSnackbar('error', 'Error during logout');
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
