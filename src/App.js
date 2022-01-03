import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css';

import About from './Components/About/About';
import Home from './Components/Home/Home';
// import Login from "./Components/Login/Login";
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 

        {/* <Route  path="/login" element={<Login />} /> */}
        <Route path="/about" element={<About />} />
        
        
        <Route path="/register" element={<Register />} /> 
        
      </Routes>
    </div>
  );
}

export default App;
