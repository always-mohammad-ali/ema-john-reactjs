import React from 'react';
import logo from '../../images/logo.png';
import  './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav className='navBar'>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;