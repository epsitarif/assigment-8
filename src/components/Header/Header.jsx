import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h1>Knowledge Cafe</h1>
        <div>
            <a href="/explore">Explore</a>
            <a href="pricing">Pricing</a>
            <a href="login">Login</a>
            </div>
        </nav>
    );
};

export default Header;