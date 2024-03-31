import React from 'react';





const Navbar = () => {



    const handleHomeClick = () => {
        // Navigate to the root page
        window.location.href = "/";
    };

    const handleAboutClick = () => {
        // Navigate to the root page
        window.location.href = "/About";
    };



    return (
        <div className='flex' class="nav" style={{ boxShadow: "0px 8px 6px -6px #F2A20C" }}>
           

                    <span className='text-4xl font-semibold' style={{ width: "33%", textAlign: "center", color: '#0F71F2' }} onClick={handleHomeClick}>Home</span>

                    <span className='text-4xl font-semibold' style={{ width: "33%", textAlign: "center", color: '#318C07' }} onClick={handleAboutClick}>About</span>

                    <span className='text-4xl font-semibold' style={{ width: "33%", textAlign: "center", color: '#D92929' }}>
                        <a href="mailto:bhosalemrunal96@gmail.com">Contact</a>
                    </span>
                
            
        </div>

    );
}

export default Navbar
