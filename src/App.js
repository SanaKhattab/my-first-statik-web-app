<<<<<<< HEAD
import Home from "./pages/Home";
import Meny from "./pages/Meny";
import Hitta from "./pages/Hitta";
import Kontakt from "./pages/Kontakt";

import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/meny" element={<Meny />} />
          <Route path="/hitta" element={<Hitta />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Router>
    </div>
  );
=======
import React from 'react';

function App() {
  const value = 'World';
  return <div>Hello {value}</div>;
>>>>>>> 922d408c15281a6ab8ec46cd940f9b83c8ab590a
}

export default App;
