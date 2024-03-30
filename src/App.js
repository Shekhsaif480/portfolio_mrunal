import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Content from "./Content";
import About from './About';

function App() {
  const Home = () => {
    return (
      <div className='block'>
        <Navbar />
        <Content />
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
