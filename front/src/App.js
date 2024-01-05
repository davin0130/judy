import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Header from './pages/Home/Header';
import Footer from './pages/Home/Footer';
import Home from './pages/Home/Home';

import Introduce from './pages/Introduce/Introduce';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioDetail from './pages/Portfolio/PortfolioDetail';


import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={(<div>...</div>)}>
        <div className='header'><Header /></div>
        <div className="body">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/intro" element={<Introduce />}></Route>
            <Route exact path="/portfolio" element={<Portfolio />}></Route>
            <Route exact path="/portfolio/:id" element={<PortfolioDetail />}></Route>
          </Routes>
        </div>
        <div className='footer'><Footer /></div>
      </Suspense>
    </div>
  );
}

export default App;
