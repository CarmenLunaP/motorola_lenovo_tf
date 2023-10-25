import React, { useState } from 'react';
import "./login.css";
import logo_Motorola from "../../assets/logo_Motorola.png";
import data from '../../data.json';
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para verificar las credenciales o enviar los datos a un servidor.
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
    // Aquí puedes redirigir al usuario a la siguiente vista
  };

  const authenticateUser = () => {
    // Busca al usuario con el ID de trabajador ingresado
    const user = data.users.find(user => user.idtrabajador === username);
  
    if (!user) {
      // Usuario no encontrado
      console.log('Usuario no encontrado');
      return;
    }
  
    if (user.password === password) {
      // Contraseña correcta, el usuario está autenticado
      console.log('Autenticación exitosa');
      // Aquí puedes redirigir al usuario a la siguiente vista
    } else {
      // Contraseña incorrecta
      console.log('Contraseña incorrecta');
    }
  };
  

  return (
    <div className='outerEdgeLogin'>
      <div>
        <img className='logoMotorolaLogin' src={logo_Motorola} alt="Logo Motorola" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className='inputLogin'
            type="text"
            placeholder="ID Trabajador *"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            className='inputLogin'
            type={showPassword ? 'text' : 'password'}
            placeholder="Contraseña *"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="button" onClick={toggleShowPassword}>
            Mostrar
          </button>
          <p>¿Olvidaste la contraseña?</p> 
        </div>
        <Link to="/home">
        <button className='btnSubmitLogin' type="submit" onClick={authenticateUser}>
          Entrar
        </button>
        </Link>
      </form>
      <div>
        <button className='btnEnterGuest' type="button">Ingresar como invitado</button>
      </div>
      <div>
        <button className='btnNewUser' type="button">Crear nuevo usuario</button>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';
// import "./login.css";
// import logo_Motorola from "../../assets/logo_Motorola.png";
// import data from '../../data.json';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const authenticateUser = () => {
//     // Busca al usuario con el ID de trabajador ingresado
//     const user = data.users.find(user => user.idtrabajador === username);
  
//     if (!user) {
//       // Usuario no encontrado
//       console.log('Usuario no encontrado');
//       return;
//     }
  
//     if (user.password === password) {
//       // Contraseña correcta, el usuario está autenticado
//       console.log('Autenticación exitosa');
//       // Aquí puedes redirigir al usuario a la siguiente vista
//     } else {
//       // Contraseña incorrecta
//       console.log('Contraseña incorrecta');
//     }
//   };
  

//   return (
//     <div className='outerEdgeLogin'>
//       <div>
//         <img className='logoMotorolaLogin' src={logo_Motorola} alt="Logo Motorola" />
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             className='inputLogin'
//             type="text"
//             placeholder="ID Trabajador *"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//           <input
//             className='inputLogin'
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Contraseña *"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <button type="button" onClick={toggleShowPassword}>
//             Mostrar
//           </button>
//           <p>¿Olvidaste la contraseña?</p> 
//         </div>
//         <button className='btnSubmitLogin' type="submit" onClick={authenticateUser}>
//           Entrar
//         </button>

//       </form>
//       <div>
//         <button className='btnEnterGuest' type="button">Ingresar como invitado</button>
//       </div>
//       <div>
//         <button className='btnNewUser' type="button">Crear nuevo usuario</button>
//       </div>
//     </div>
//   );
// }

// export default Login;