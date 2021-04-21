import React from 'react';
import './Footer.css';
import img from '../../images/footerimg.jpg';

const Footer = () => {
    return (
        <div className="footer">
            <img src={img} alt=""/>
            <h5>স্বত্ব © {(new Date()).getFullYear()} প্রথম আলো সম্পাদক ও প্রকাশক: মতিউর রহমান</h5>
        </div>
    );
};

export default Footer;