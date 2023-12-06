import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import './App.css';
import AppRouter from './router/Router';
import { SnackbarProvider } from './hooks/useSnackbar';

const App = () => {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <AuthProvider >
          <div className='app'>
            <AppRouter />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </SnackbarProvider>
  );
};

export default App;