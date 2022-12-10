import React from 'react';
import Devices from '../../assets/img/image-devices.png';
import '../../scss/components/_clipboard.scss';
import ScrollReveal from 'scrollreveal';

const Clipboard = () => {
  return (
    <section className='clipboard section'>
      <div className="clipboard-container container">
        <div className="clipboard-data">
          <h2 className='clipboard-title'>Access Clipboard anywhere</h2>
          <p className='clipboard-subtitle'>Whether you’re on the go, or at your computer, you can access all your Clipboard 
            snippets in a few simple clicks.
          </p>
          <img src={Devices} alt="devices" className='clipboard-image'/>
        </div>
      </div>
    </section>
  )
}

ScrollReveal().reveal('.clipboard-container', {origin: 'top', distance: '60px', duration: 2500, delay: 400});
export default Clipboard;