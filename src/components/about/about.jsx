import React from 'react';

import about1 from '../../img/about-tech.png';
import './about.scss';

const About = () => {
    return (
        <>
            <div className="wrapper wrapper-about">
                <img src={about1} alt="" />
                <div className="about-container">
                    <h2>About us</h2>
                    <p className='heading-p'>Technology</p>
                    <div className="about-container--desc">
                        <p>
                            Nulla placerat mi vitae mauris varius consequat.
                            Aliquam libero ante, consectetur at turpis sit
                            amet, congue Suspendisse porta bibendum
                            scelerisque.
                        </p>
                        <p>
                            Suspendisse porta bibendum scelerisque. 
                            Nulla placerat
                        </p>
                    </div>
                    <a href="" className='learn-btn'>Learn more</a>
                </div>
            </div>
        </>
    )
}

export default About;