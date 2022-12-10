import React from 'react';
import '../../scss/components/_clients.scss';
import Google from '../../assets/img/logo-google.png';
import Hp from '../../assets/img/logo-hp.png';
import Ibm from '../../assets/img/logo-ibm.png';
import Microsoft from '../../assets/img/logo-microsoft.png';
import Vector from '../../assets/img/logo-vector-graphics.png';
import ScrollReveal from 'scrollreveal';

const Clients = () => {
  return (
    <section className='clients section'>
      <div className="clients-container container">
        <div className="clients-data">
          <img src={Google} alt="google" className='clients-logo'/>
          <img src={Ibm} alt="ibm" className='clients-logo'/>
          <img src={Microsoft} alt="microsoft" className='clients-logo'/>
          <img src={Hp} alt="hewlett packard" className='clients-logo'/>
          <img src={Vector} alt="vector" className='clients-logo'/>
        </div>
      </div>
    </section>
  )
}

ScrollReveal().reveal('.clients-container', {origin: 'top', distance: '60px', duration: 2500, delay: 400});
export default Clients;