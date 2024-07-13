import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-16 bg-[#E3E6F3]">
      <div className="footer-container w-full ">
         <div className='flex w-full justify-between my-7 border-b-[1px] pb-2 border-[#0000011f] items-center'>
         <div className="footer-links">
          <a href="#contact" className="footer-link">Contact Us</a>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" className="social-icon"><FaFacebookF /></a>
          <a href="https://www.twitter.com" className="social-icon"><FaTwitter /></a>
          <a href="https://www.instagram.com" className="social-icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com" className="social-icon"><FaLinkedinIn /></a>
        </div>
         </div>
        <div className="footer-copy">
          <p>&copy; 2024 Brain Media Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
