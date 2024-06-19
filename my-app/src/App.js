import React from "react";
import "./styles/App.css";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<HomePage />} />
        </Routes>
    </HashRouter>
  );
};

export default App;

