import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Browse from './components/Browse/Browse'
import Detail from './components/Detail/Detail'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/properties" element={<Browse />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  
);

reportWebVitals();
