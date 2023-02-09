import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CryptoPage } from './pages/CryptoPage';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<CryptoPage />}></Route>
    </Routes>
  </>
  );
}

export default App;
