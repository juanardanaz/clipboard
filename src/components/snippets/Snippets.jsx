import React from 'react';
import Computer from '../../assets/img/image-computer.png';
import '../../scss/components/_snippets.scss';
import ScrollReveal from 'scrollreveal';

const Snippets = () => {
  return (
    <section className='snippets section'>
      <div className="snippets-container container">
        <div className="snippets-main">
          <h2 className='snippets-title'>Keep track of your snippets</h2>
          <p className='snippets-subtitle'>Clipboard instantly stores any item you copy in the cloud, 
            meaning you can access your snippets immediately on all your 
            devices. Our Mac and iOS apps will help you organize everything.
          </p>
        </div>

        <div className="snippets-data">
          <img src={Computer} alt="computer" className='snippets-image'/>

          <div className="snippets-data-content">
            <div className="snippets-data-function">
              <h3 className='snippets-data-title'>Quick Search</h3>
              <p className='snippets-data-description'>Easily search your snippets by content, category, web address, application, and more.</p>
            </div>

            <div className="snippets-data-function">
              <h3 className='snippets-data-title'>iCloud Sync</h3>
              <p className='snippets-data-description'>Instantly saves and syncs snippets across all your devices.</p>
            </div>

            <div className="snippets-data-function">
              <h3 className='snippets-data-title'>Complete History</h3>
              <p className='snippets-data-description'>Retrieve any snippets from the first moment you started using the app.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ScrollReveal().reveal('.snippets-container', {origin: 'top', distance: '60px', duration: 2500, delay: 400});
export default Snippets;