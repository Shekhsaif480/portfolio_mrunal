import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Content from "./Content";
import About from './About';

import { FaEnvelope, FaPhoneSquare, FaLinkedin, FaGithub} from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

import gc from "./imgs/gc.jpg"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white sticky z-50 mt-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:example@example.com">bhosalemrunal96@gmail.com</a>
          </div>
          <div className="flex items-center">
            <FaPhoneSquare className="mr-2" />
            <span>+91 996 744 7896</span>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="mr-2" />
            <span>Mumbai, India</span>
          </div>
        </div>
        <div className="flex items-center">
          <a href="http://www.linkedin.com/in/mrunalabhosale" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/mrrunal05" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.cloudskillsboost.google/public_profiles/07b0d61d-53c3-4ab7-a10b-7b48f047ec75" target="_blank" rel="noopener noreferrer">
            <img src={gc} alt='gdsc' width={40} height={40} className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const Home = () => {
    return (
      <div className='block'>
        <Navbar />
        <Content />
        <Footer/>
      </div>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
