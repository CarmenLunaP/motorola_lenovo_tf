import React, { useState } from 'react';
import './login.css';
import logo_Motorola from '../../assets/logo_Motorola.png';
import data from '../../data.json';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

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

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (event.target.name === 'username') {
        document.getElementById('password').focus();
      } else if (event.target.name === 'password') {
        authenticateUser();
      }
    }
  };

  const authenticateUser = () => {
    const user = data.users.find((user) => user.idtrabajador === username);

    if (!user || user.password !== password) {
      setErrorMessage('❌  Credenciales Incorrectas');
    } else {
      setErrorMessage('');
      localStorage.setItem('token', 'your_token_here');
      localStorage.setItem('userId', user.id);
      localStorage.setItem('role', user.role);
      window.location.href = '/home';
    }
  };

  return (
    <div className="body-login">
      <div className="outer-edge-login">
        <div>
          <img className="logo-motorola-login" src={logo_Motorola} alt="Logo Motorola" />
        </div>
        <form>
          <input
            className="input-login-id"
            type="text"
            name="username"
            autoFocus
            placeholder="ID Trabajador *"
            value={username}
            onChange={handleUsernameChange}
            onKeyPress={handleEnterPress}
          />
          <div className="input-container-eye-password">
            <input
              id="password"
              className="input-login-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Contraseña *"
              value={password}
              onChange={handlePasswordChange}
              onKeyPress={handleEnterPress}
            />
            <button className="btn-eye" type="button" onClick={toggleShowPassword}>
              {<VisibilityOutlinedIcon />}
            </button>
          </div>
          <p className="p-message-login">{errorMessage}</p>
          <div className="p-link-login">
            <p>¿Olvidaste la contraseña? </p>
          </div>
          <button className="btn-submit-login" type="button" onClick={authenticateUser}>
            Entrar
          </button>
        </form>
        <hr className="separator-line"></hr>
        <div>
          <button className="btn-enter-guest" type="button">
            Ingresar como invitado
          </button>
        </div>
        <div>
          <button className="btn-new-user" type="button">
            Crear nuevo usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;




// import React, { useState } from 'react';
// import "./login.css";
// import logo_Motorola from "../../assets/logo_Motorola.png";
// import data from '../../data.json';
// //import { Link } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//     setErrorMessage('');
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     setErrorMessage('');
//   };

//   const toggleShowPassword = (event) => {
//     setShowPassword(!showPassword);
//   };

//   const authenticateUser = (event) => {
//     const user = data.users.find(user => user.idtrabajador === username);

//     if (!user || user.password !== password) {
//       setErrorMessage("❌  Credenciales Incorrectas");
//     } else {
//       setErrorMessage('');
//       localStorage.setItem('token', 'your_token_here');
//       localStorage.setItem('userId', user.id);
//       localStorage.setItem('role', user.role);
//       window.location.href = '/home'; 
//     }
//   };

//   return (
//     <div className='body-login'>
//       <div className='outer-edge-login'>
//         <div>
//           <img className='logo-motorola-login' src={logo_Motorola} alt="Logo Motorola" />
//         </div>
//         <form>
//           <input
//             className='input-login-id'
//             type="text" autoFocus
//             placeholder="ID Trabajador *"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//           <div className='input-container-eye-password'>
//             <input
//               className='input-login-password'
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Contraseña *"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <button className="btn-eye" type="button" onClick={toggleShowPassword}>
//             {<VisibilityOutlinedIcon />}
//             </button>
//           </div>
//           <p className='p-message-login'>{errorMessage}</p>
//           <div className='p-link-login'>
//             <p>¿Olvidaste la contraseña? </p> 
//           </div>
//           <button className='btn-submit-login' type="button" onClick={authenticateUser}>
//             Entrar
//           </button>
//         </form>
//         <hr className='separator-line'></hr>
//         <div>
//           <button className='btn-enter-guest' type="button">Ingresar como invitado</button>
//         </div>
//         <div>
//           <button className='btn-new-user' type="button">Crear nuevo usuario</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;