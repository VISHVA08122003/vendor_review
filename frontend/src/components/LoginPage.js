import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from './Service/api';
import './Login.css'

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    getData({ username, password })
      .then((result) => {
        console.log(result);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 id="c">EVENT MANAGEMENT SYSTEM </h2>
        <div className="form-group">
          <label htmlFor="username" id="a">Username :</label>
          <input
            type="text" placeholder="Enter Username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" id="b">Password :</label>
          <input
            type="password" placeholder="Enter password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        
        <div className='e'>
        <button type="submit">Login</button>
        </div>
        <div>
        <p className="u"> or </p>
      </div>
   
      <div id="z">
      <button type="submit" onClick={handleSignup}>signup</button>
   
    
      </div>
      </form>
    </div>
  );
};

export default LoginPage;
