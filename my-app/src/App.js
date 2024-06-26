import React from "react";
import "./styles/App.css";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import About from "./pages/about/About";
import Pageerror from "./pages/pageerror/Pageerror";
import Logementpage from "./pages/logementpage/Logementpage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Pageerror />} />
        <Route path="/logement/:id" element={<Logementpage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
