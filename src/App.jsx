// eslint-disable-next-line no-unused-vars
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recaudacion from './components/Recaudacion'
import Esquela from './components/Esquela';
import Extravio from './components/Extravio';

function App() {

  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Recaudacion />} />
            <Route path="/esquela" element={<Esquela />} />
            <Route path="/extravio" element={<Extravio />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App
