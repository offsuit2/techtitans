import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Kimmy } from './Pages/Kimmy/Kimmy';
import { Doug } from './Pages/Doug/Doug';
import { Niko } from './Pages/Niko/Niko';
import { David } from './Pages/David/David';
import { Ghaslin } from './Pages/Ghaslin/Ghaslin';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Kimmy' element={<Kimmy />}/>
      <Route path='/Doug' element={<Doug />}/>
      <Route path='/Niko' element={<Niko />}/>
      <Route path='/David' element={<David />}/>
      <Route path='/Ghaslin' element={<Ghaslin />}/>
    </Routes>
  </BrowserRouter>
);