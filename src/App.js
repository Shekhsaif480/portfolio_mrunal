import gdsc from "./gdsc.png";
import mrunal from './mrunal.png';
import html from "./html.png";
import css from './css.jpeg'
import figma from './figma.jpeg'
import bs from './bootstrap.png';
import tb from './tableau.png';
import pb from './powerbi.png';
import pd from './pandas.png';
import py from './python.jpeg';
import np from './numpy.png';
import { useEffect, useRef, useState } from 'react';
import './App.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [textWidth, setTextWidth] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const { width, height } = textRef.current.getBoundingClientRect();
      setTextWidth(width);
      setTextHeight(height);
    }
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="App block">

      <div className="flex">


      <div className='mt-72'>
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
        <img src={mrunal} class="floating-image" style={{ width: '400px', height: '400px', marginLeft: "50px", alignContent: "center", marginTop: '150px', borderRadius: '200px' }} />
      </div>

      </div>
      <div className='text-6xl ml-2 flex font-bold' style={{color: '#0F71F2', animation: 'fadeIn 1s forwards ease', animationDelay: '7.5s' }}>
      Skills:
      </div>
      <div className="flex mt-8">
        <Slider {...settings}>

        <img src={py} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        <img src={np} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        <img src={pd} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        <img src={pb} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        <img src={tb} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        <img src={html} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        <img src={css} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        <img src={bs} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        <img src={figma} style={{ height: "100px", width: "100px" , marginLeft:'20px', borderRadius: '50px'}} />
        </Slider>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
