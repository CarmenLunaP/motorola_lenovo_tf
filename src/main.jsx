import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login/login.jsx"
import Home from './components/home/home.jsx';
import SearchResult from './components/searchResult/searchResult.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/searchResult" element={<SearchResult />} /> 
        
      </Routes>
    </Router>
  </React.StrictMode>
);


