import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>The Fitness Zone</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
                <a href="/about">About Us</a>
            </div>
        </div>
    );
};

export default Header;