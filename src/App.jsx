// eslint-disable-next-line no-unused-vars
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recaudacion from './components/Recaudacion'
import Esquela from './components/Esquela';
import Extravio from './components/Extravio';
import ViaCerrada from './components/ViaCerrada';
import Aviso from './components/Aviso';
import Camionetas from './components/Camionetas';
import Accidente from './components/Accidente';

function App() {

  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Recaudacion />} />
            <Route path="/esquela" element={<Esquela />} />
            <Route path="/extravio" element={<Extravio />} />
            <Route path="/viacerrada" element={<ViaCerrada />} />
            <Route path="/aviso" element={<Aviso />} />
            <Route path="/camionetas" element={<Camionetas />} />
            <Route path="/accidente" element={<Accidente />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App
