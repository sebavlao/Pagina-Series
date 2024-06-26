import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { SerieInfo } from './pages/SerieInfo';
import { Trending } from './pages/Trending';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/:serieId" element={<SerieInfo />}/>
      <Route path="/trending" element={<Trending />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)