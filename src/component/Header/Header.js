import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
           <hr/> 
        </div>
    );
};

export default Header;