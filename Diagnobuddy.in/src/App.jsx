import { useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contactus from './pages/contact us/Contactus';
import Labtest from './pages/lab test/Labtest';
import Connecttodoctor from './pages/connect with doctor/Connecttodoctor';
import Downloadreport from './pages/download report/Downloadreport';
import Gallery from './pages/gallery/Gallery';
import Certification from './pages/certification/Certification';
import Policy from './pages/policy/Policy';
import Register from './pages/register/Register';
import Error404 from './component/Error404/Error404';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/companypolicy" element={<Policy />} />
        <Route path="/labtest" element={<Labtest />} />
        <Route path="/doctor" element={<Connecttodoctor />} />
        <Route path="/downloadreport" element={<Downloadreport />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
