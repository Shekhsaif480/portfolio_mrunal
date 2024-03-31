import React from 'react'
import gdsc from "./gdsc.png";
import mrunal from './mrunal.png';

import html from "./imgs/html.png";
import css from "./imgs/css.jpeg";
import figma from "./imgs/figma.jpeg";
import bs from "./imgs/bootstrap.png";
import tb from "./imgs/tableau.png";
import pb from "./imgs/powerbi.png";
import pd from "./imgs/pandas.png";
import py from "./imgs/python.jpeg";
import np from "./imgs/numpy.png";
import gc from "./imgs/gc.jpg"




import './App.css';


const Content = () => {



  
    const LOGOS = [
      <img src={html} alt="HTML" className="text-slate-800" style={{ width: 100 , height:100 }} />,
      <img src={css} alt="CSS" className="text-slate-800" style={{ width: 100 ,height:100 }} />,
      <img src={figma} alt="Figma" className="text-slate-800" style={{ width: 100 ,height:100}} />,
      <img src={bs} alt="Bootstrap" className="text-slate-800" style={{ width: 100 ,height:100}} />,
      <img src={tb} alt="Tableau" className="text-slate-800" style={{ width: 100 ,height:100}} />,
      <img src={pb} alt="Power BI" className="text-slate-800" style={{ width: 100 ,height:100}} />,
      <img src={pd} alt="Pandas" className="text-slate-800" style={{ width: 100 ,height:100}} />,
      <img src={py} alt="Python" className="text-slate-800" style={{ width: 100 ,height:100}} />,
      <img src={np} alt="NumPy" className="text-slate-800" style={{ width: 100 ,height:100}} />,
      <img src={gc} alt="cloud" className="text-slate-800" style={{ width: 100 ,height:100}} />,

    ];
  


    
  return (
    <div>
      <div className="flex" >


<div className='mt-32'>
  <h1 className="text-9xl font-bold" >
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
  <h2 className='text-3xl ml-2 flex'>Data Analyst <span className='mr-3'></span>|<span className='ml-3'></span> Frontend Web Developer <span className='mr-3'></span>|<span className='ml-3'></span> Content Member at GDSC <img src={gdsc} alt="gdsc" style={{ width: '38px', height: '38px', animation: 'fadeIn 1s forwards', animationDelay: '7s', marginLeft: "5px", alignContent: "center" }} /></h2>
</div>
<div>
  <img src={mrunal} alt='mrunal' style={{ width: '400px', height: '400px', marginLeft: "23%", alignContent: "center", marginTop: '0px', borderRadius: '100px' }} />
  
</div>

</div>
<div className='text-5xl mt-16 ml-2 mb-2 flex font-bold bg-white' style={{ color: '#F2A20C', animation: 'fadeIn 1s forwards ease', animationDelay: '7.5s', textAlign: 'center'}}>
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
    </div>
  )
}

export default Content
