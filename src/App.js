import './App.css'
import React from 'react';
import Home from './pages/Home/Home';
import Traning from './pages/Traning/Traning';
import Contact from './pages/Contact/Contact';
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} /> 
          <Route path="/Traning" element={<Traning/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
