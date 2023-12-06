import { useState } from 'react';
import './Login.css';
import { useAuth } from '../../AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    await login(credentials);
  };

  return (
    <section className="login">
      <section className="login__container">
        <div className="login__container--logo">
          <img src="../../../assets/logo.png" alt="Company Logo" />
          <h2>Aussie Tea</h2>
        </div>
        <form className="login__container--form">
          <input
            className="input"
            type="email"
            placeholder='Email'
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <input
            className="input"
            type="password"
            placeholder='Password'
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button className="button" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </section>
    </section>
  );
};

export default Login;
