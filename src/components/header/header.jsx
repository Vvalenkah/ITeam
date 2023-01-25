import React from 'react';

import logo from '../../img/logo1.svg';
import './header.scss';

const Header = () => {
    return (
        <>
            <header>
                <div className="wrapper header-wrapper">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href='#'><li>About Us</li></a>
                        <a href="#"><li>Service</li></a>
                        <a href="#"><li>Products</li></a>
                        <a href="#"><li>People</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;