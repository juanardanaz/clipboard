import React from 'react';
import '../../scss/components/_cta.scss';

const Cta = () => {
  return (
    <section className='cta section'>
        <div className="cta-container container">
            <div className="cta-data">
                <h2 className='cta-title'>Clipboard for iOS and Mac OS</h2>
                <p className='cta-subtitle'>Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                    and you’re ready to start adding to your clipboard.
                </p>

                <div className="cta-buttons">
                    <a href="#" className='button button-ios'>Download for iOS</a>
                    <a href="#" className='button button-mac'>Download for Mac</a>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Cta;