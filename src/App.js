import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
=======
import './App.css';
import Cart from './Components/Cart/Cart';

>>>>>>> 575cb0927d1faa71b9731bd7d2bf62f8435ddf25

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
=======
      <Cart ></Cart>
>>>>>>> 575cb0927d1faa71b9731bd7d2bf62f8435ddf25
    </div>
  );
}

export default App;
