import React from 'react'
import  { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
    const [isActive, setActive] = useState("false");


  
    return (
        <div className='flex ' style={{boxShadow:"1px 8px 1px #D92929"}}>
            <span className='text-6xl font-bold' style={{width:"33%",textAlign:"center",color:'#0F71F2'}}>Home</span>
            <span className='text-5xl'>|</span>
            <span className='text-6xl font-bold' style={{width:"33%",textAlign:"center",color:'#318C07'}}>About</span>
            <span className='text-5xl'>|</span>
            <span className='text-6xl font-bold' style={{ width: "33%", textAlign: "center", color: '#F2A20C' }}>
    <a href="mailto:shaiktausif7557@gmail.com">Contact</a>
</span>
        </div>
    );
}

export default Navbar
