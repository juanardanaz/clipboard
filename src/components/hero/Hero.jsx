import React from 'react';
import '../../scss/components/_hero.scss';
import Logo from '../../assets/img/logo.svg';
import ScrollReveal from 'scrollreveal';

const Hero = () => {
  return (
    <section className='hero section'>
      <div className="hero-container container">
        <img src={Logo} alt="logo" className='hero-logo'/>
        <div className="hero-data">
          <h1 className="hero-title">A history of everything you copy</h1>
          <p className="hero-subtitle">Clipboard allows you to track and organize everything you 
              copy. Instantly access your clipboard on all your devices.</p>
        </div>

        <div className="hero-buttons">
          <a href="#" className='button button-ios'>Download for iOS</a>
          <a href="#" className='button button-mac'>Download for Mac</a>
        </div>
      </div>
    </section>
  )
}

ScrollReveal().reveal('.hero-container', {origin: 'top', distance: '60px', duration: 2500, delay: 400});
export default Hero;