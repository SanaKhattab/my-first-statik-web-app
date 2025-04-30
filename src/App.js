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
}

export default App;
