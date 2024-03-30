import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Navbar from "./Navbar";

const About = () => {
    const [overviewVisible, setOverviewVisible] = useState(false);

    const toggleOverview = () => {
        setOverviewVisible(!overviewVisible);
    };

    return (
        <div className=''>
            <h1 className="text-5xl font-semibold text-center" style={{ boxShadow: "0px 8px 6px -6px #F2A20C", color: '#318C07' }}>About Me</h1>

            <div className="flex items-center justify-between " style={{ boxShadow: "0px 8px 6px -6px #F2A20C"}}>
                 <h1 className='mt-6 text-4xl font-semibold ' onClick={toggleOverview}>
                    Overview:
                </h1>
                {overviewVisible ? <IoIosArrowUp className="text-4xl" onClick={toggleOverview} /> : <IoIosArrowDown className="text-4xl" onClick={toggleOverview} />}

            </div>
            {overviewVisible && (
                <>
                    <p className='mt-6 text-2xl font-medium'>Data analytics is the area that I find fascinating because it allows me to brainstorm and do analysis over numerous topics as to why they are the way things are. Being a data analyst has given me a broader perspective of things and helped me understand how to simplify the complex datasets and get to their conclusions, making it easier to understand the large datasets and make strategies for the client regarding their business.</p>
                    <p className='mt-6 text-2xl font-medium'>Recently, there are many AI tools that make the analysis reports simpler yet captivating, and I am currently exploring the use of these systems such as Power BI and Tableau to improve the display of my analysis reports in forms of dashboards.</p>
                    <p className='mt-6 text-2xl font-medium'>During my initial years, I was engaged in learning frontend web development and website designing using tools like Canva and Figma. But after being introduced to data science and data analytics, I developed a keen interest and grasped the technology in a short period of time. Since then, I have been making continuous progress in it.</p>
                    <p className='mt-6 text-2xl font-medium'>Regarding the frontend web development, I plan to venture into JavaScript frameworks such as React.js, making my dashboards more interactive and accessible.</p>
                </>
            )}

<div className="flex items-center justify-between " style={{ boxShadow: "0px 8px 6px -6px #F2A20C"}}>
                 <h1 className='mt-6 text-4xl font-semibold ' onClick={toggleOverview}>
                    Education:
                </h1>
                {overviewVisible ? <IoIosArrowUp className="text-4xl" onClick={toggleOverview} /> : <IoIosArrowDown className="text-4xl" onClick={toggleOverview} />}

            </div>
            {overviewVisible && (
                <>
                    <p className='mt-6 text-2xl font-medium'>Bachelors In Engineering </p>
                    <p className='mt-6 text-2xl font-medium'>Recently, there are many AI tools that make the analysis reports simpler yet captivating, and I am currently exploring the use of these systems such as Power BI and Tableau to improve the display of my analysis reports in forms of dashboards.</p>
                    <p className='mt-6 text-2xl font-medium'>During my initial years, I was engaged in learning frontend web development and website designing using tools like Canva and Figma. But after being introduced to data science and data analytics, I developed a keen interest and grasped the technology in a short period of time. Since then, I have been making continuous progress in it.</p>
                    <p className='mt-6 text-2xl font-medium'>Regarding the frontend web development, I plan to venture into JavaScript frameworks such as React.js, making my dashboards more interactive and accessible.</p>
                </>
            )}
        </div>
    );
}

export default About;
