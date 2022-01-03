import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
