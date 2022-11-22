import React from 'react';
import '../../scss/components/_footer.scss';
import LogoFooter from '../../assets/img/logo.svg';
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer section'>
      <div className="footer-container container">
        <div className="footer-data grid">
          <img src={LogoFooter} alt="logo" className='footer-logo' />

          <div className="footer-content">
              <ul className="footer-links">
                <li><a href="#" className="footer-link">FAQs</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Press Kit</a></li>
                <li><a href="#" className="footer-link">Install Guide</a></li>
              </ul>
            </div>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com/" className="footer-social-link" target="_blank" rel="noreferrer">
              <FaFacebookSquare className="footer-social-icon"/>
          </a>
          <a href="https://twitter.com/" className="footer-social-link" target="_blank" rel="noreferrer">
              <FaTwitter className="footer-social-icon"/>
          </a>
          <a href="https://www.instagram.com/" className="footer-social-link" target="_blank" rel="noreferrer">
              <FaInstagram className="footer-social-icon"/>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Footer;