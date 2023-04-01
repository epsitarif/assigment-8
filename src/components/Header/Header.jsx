import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-main'>
            <div className='nav-title'>
            <h2>Knowledge Cafe</h2>
            </div>
            <div className='nav-link'>
            <a href="/explore">Explore</a>
            <a href="pricing">Pricing</a>
            <a href="login">Login</a>
            </div>
        </div>
    );
};

export default Header;