// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import General from './Pages/General';
import Govt from './Pages/Govt';
import Development from './Pages/Development';
import '@fontsource/poppins'; 
import Leadership from './Pages/Leadership';
import Culture from './Pages/Culture';


function App() {
  return (
    <Router>
      <Header />
      <div className="pt-[120px]">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/general' element={<General/>} />
        <Route path='/govt' element={<Govt />} />
        <Route path='/development' element={<Development />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/culture' element={<Culture />} />
      </Routes>
      </div>

    </Router>
  );
}

export default App;
