
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState(null)
  const { login } = useAuth();

  const handleSubmit = async (
e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/login', { email, password });
      login(response.data.token);
      console.log('Logged in successfully');
    } catch (error) {
      setError('Invalid email or password'); 
      console.error('Login error:', error);
    }
  };
   

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;