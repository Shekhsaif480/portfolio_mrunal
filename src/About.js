import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const About = () => {
    const [overviewVisible, setOverviewVisible] = useState(true);
    const [educationVisible, setEducationvisible] = useState(true);

    const toggleOverview = () => {
        setOverviewVisible(!overviewVisible);
    };
    const toggleEdu = () => {
        setEducationvisible(!educationVisible);
    };

    return (
        <div className=''>
            <h1 className="text-5xl font-semibold mt-4 " style={{ boxShadow: "0px 8px 6px -6px #F2A20C", color: '#318C07' }}>About:</h1>

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
                 <h1 className='mt-6 text-4xl font-semibold ' onClick={toggleEdu}>
                    Education:
                </h1>
                {educationVisible ? <IoIosArrowUp className="text-4xl" onClick={toggleEdu} /> : <IoIosArrowDown className="text-4xl" onClick={toggleEdu} />}

            </div>
            {educationVisible && (
                <>
                    <p className='mt-6 text-2xl font-bold'>Bachelors In Engineering &#91;2022-pursuing&#93; <span className='font-medium'>: With an aggregate of 75%</span></p>
                    <p className='mt-6 text-2xl font-bold'>HSC &#91;2021-2022&#93; <span className='font-medium'>:scored 75%</span></p>
                    <p className='mt-6 text-2xl font-bold'>SSC &#91;2019-2020&#93; <span className='font-medium'>:scored 75%</span></p>
                </>
            )}
        </div>
    );
}

export default About;
