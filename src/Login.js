import React from 'react';
import './Login.css';
// import Home from './Home';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/home');
  };
  return (
    <>
    <div className='out-navbar'>
      <div className="navbar">Sanyo</div>
      </div>
      <div className="login-container">
        <div className="login-box">
          <div className="avatar"></div>
          <div className="input-login">
            <input type="text" placeholder="User Id" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
          </div>
          <button className="login-button" onClick={goToHomePage}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;


