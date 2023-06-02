import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/pages/Inicio/Inicio';
import Inicio_dev from './componentes/pages/Inicio-dev/Inicio_dev';
import { CadastroDev } from './componentes/pages/Cadastro/cadastro';

function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<Inicio/>} />
      <Route path='/Inicio_Dev' element={<Inicio_dev/>} />
      <Route path='/CadastroDev' element={<CadastroDev/>} />
    </Routes>
  </Router>
}

export default App;
