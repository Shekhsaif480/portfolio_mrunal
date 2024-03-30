import gdsc from "./gdsc.png";
import mrunal from './mrunal.png';


import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5";
import { SiPowerbi } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";


import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from "./Navbar";



function App() {
  const [textWidth, setTextWidth] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef(null);

  const LOGOS = [
    <ImHtmlFive size={100} className="text-slate-800" />, // Example of adjusting size for a React Icon
    <IoLogoCss3 size={100} className="text-slate-800" />,
    <IoLogoFigma size={100} className="text-slate-800" />,
    <FaBootstrap size={100} className="text-slate-800" />,
    <IoLogoTableau size={100} className="text-slate-800" />,
    <SiPowerbi size={100} className="text-slate-800" />,
    <SiPandas size={100} className="text-slate-800" />,
    <FaPython size={100} className="text-slate-800" />,
    <SiNumpy size={100} className="text-slate-800" />,
    <SiGooglecloud size={100} className="text-slate-800" />,
  ];

  useEffect(() => {
    if (textRef.current) {
      const { width, height } = textRef.current.getBoundingClientRect();
      setTextWidth(width);
      setTextHeight(height);
    }
  }, []);

  return (
    <div className="App block">

        <Navbar/>
      <div className="flex">


      <div className='mt-32'>
        <h1 className="text-9xl font-bold" ref={textRef}>
          <span style={{ color: '#0F71F2', animation: 'fadeIn 1s forwards ease', animationDelay: '0.5s' }}>H</span>
          <span style={{ color: '#318C07', animation: 'fadeIn 1s forwards ease', animationDelay: '1s' }}>e</span>
          <span style={{ color: '#F2A20C', animation: 'fadeIn 1s forwards ease', animationDelay: '1.5s' }}>l</span>
          <span style={{ color: '#D92929', animation: 'fadeIn 1s forwards', animationDelay: '2s' }}>l</span>
          <span style={{ color: '#868686', animation: 'fadeIn 1s forwards', animationDelay: '2.5s' }}>o</span>
          <span style={{ color: '#0F71F2', animation: 'fadeIn 1s forwards', animationDelay: '3s' }}>!</span>
          <br />
          <span>I'm</span>
          <span style={{ marginLeft: '20px', animation: 'fadeIn 1s forwards ease', animationDelay: '0.5s' }}>M</span>
          <span style={{ animation: 'fadeIn 1s forwards ease', animationDelay: '1s' }}>r</span>
          <span style={{ animation: 'fadeIn 1s forwards ease', animationDelay: '1.5s' }}>u</span>
          <span style={{ animation: 'fadeIn 1s forwards', animationDelay: '2s' }}>n</span>
          <span style={{ animation: 'fadeIn 1s forwards', animationDelay: '2.5s' }}>a</span>
          <span style={{ animation: 'fadeIn 1s forwards', animationDelay: '3s' }}>l</span>
          <span style={{ marginLeft: "20px", animation: 'fadeIn 1s forwards ease', animationDelay: '3.5s' }}>B</span>
          <span style={{ animation: 'fadeIn 1s forwards ease', animationDelay: '4s' }}>h</span>
          <span style={{ animation: 'fadeIn 1s forwards ease', animationDelay: '4.5s' }}>o</span>
          <span style={{ animation: 'fadeIn 1s forwards ease', animationDelay: '5s' }}>s</span>
          <span style={{ animation: 'fadeIn 1s forwards ease', animationDelay: '5.5s' }}>a</span>
          <span style={{ animation: 'fadeIn 1s forwards ease', animationDelay: '6s' }}>l</span>
          <span style={{ animation: 'fadeIn 1s forwards ease', animationDelay: '6.5s' }}>e</span>
        </h1>
        <h2 className='text-3xl ml-2 flex'>Data Analyst <span className='mr-3'></span>|<span className='ml-3'></span> Frontend Web Developer <span className='mr-3'></span>|<span className='ml-3'></span> Content Member at GDSC <img src={gdsc} style={{ width: '38px', height: '38px', animation: 'fadeIn 1s forwards', animationDelay: '7s', marginLeft: "5px", alignContent: "center" }} /></h2>
      </div>
      <div>
        <img src={mrunal} style={{ width: '400px', height: '400px', marginLeft: "23%", alignContent: "center", marginTop: '0px', borderRadius: '100px' }} />
        
      </div>

      </div>
      <div className='text-6xl mt-16 ml-2 flex font-bold bg-white' style={{ color: '#D92929', animation: 'fadeIn 1s forwards ease', animationDelay: '7.5s', textAlign: 'center' }}>
  Skills:
      <div className="relative m-auto w-[85%] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[20px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[20px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(500px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
</div>


      

      <footer></footer>
    </div>
  );
}

export default App;
