import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Header from './pages/Home/Header';
import Footer from './pages/Home/Footer';
import Home from './pages/Home/Home';

import Introduce from './pages/Introduce/Introduce';


import './App.css';
import './style/Home/Home.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={(<div>...</div>)}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/intro" element={<Introduce />}></Route>
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
