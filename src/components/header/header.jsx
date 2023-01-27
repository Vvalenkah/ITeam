import React from 'react';

import logo from '../../img/logo1.svg';
import './header.scss';

const Header = () => {
    return (
        <>
            <header>
                <div className="wrapper header-wrapper" id='home'>
                    <div className="logo-container">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul>
                        <a href="#home"><li>Home</li></a>
                        <a href='#about'><li>About Us</li></a>
                        <a href="#service"><li>Service</li></a>
                        <a href="#people"><li>People</li></a>
                        <a href="#products"><li>Products</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;