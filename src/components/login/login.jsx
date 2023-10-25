import React, { useState } from 'react';
import "./login.css";
import logo_Motorola from "../../assets/logo_Motorola.png";
import data from '../../data.json';
//import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage('');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const authenticateUser = () => {
    const user = data.users.find(user => user.idtrabajador === username);

    if (!user || user.password !== password) {
      setErrorMessage("❌  Credenciales Incorrectas");
    } else {
      setErrorMessage('');
      localStorage.setItem('token', 'your_token_here');
      localStorage.setItem('userId', user.id);
      localStorage.setItem('role', user.role);
      window.location.href = '/home'; 
    }
  };

  return (
    <div className='body-login'>
      <div className='outer-edge-login'>
        <div>
          <img className='logo-motorola-login' src={logo_Motorola} alt="Logo Motorola" />
        </div>
        <form>
          <input
            className='input-login-id'
            type="text"
            placeholder="ID Trabajador *"
            value={username}
            onChange={handleUsernameChange}
          />
          <div className='input-container-eye-password'>
            <input
              className='input-login-password'
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña *"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className='btn-eye' type="button" onClick={toggleShowPassword}>
              👁️
            </button>
          </div>
          <p className='p-message-login'>{errorMessage}</p>
          <div className='p-link-login'>
            <p>¿Olvidaste la contraseña? </p> 
          </div>
          <button className='btn-submit-login' type="button" onClick={authenticateUser}>
            Entrar
          </button>
        </form>
        <hr className='separator-line'></hr>
        <div>
          <button className='btn-enter-guest' type="button">Ingresar como invitado</button>
        </div>
        <div>
          <button className='btn-new-user' type="button">Crear nuevo usuario</button>
        </div>
      </div>
    </div>
  );
}

export default Login;