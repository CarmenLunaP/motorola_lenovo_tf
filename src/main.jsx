import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login/login.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        
      </Routes>
    </Router>
  </React.StrictMode>
);


