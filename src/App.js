<<<<<<< HEAD
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
=======
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Home />
      </div>
>>>>>>> origin/choyon
    </div>
  );
}

export default App;
