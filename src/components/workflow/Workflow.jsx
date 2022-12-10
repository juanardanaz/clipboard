import React from 'react';
import '../../scss/components/_workflow.scss';
import Blacklist from '../../assets/img/icon-blacklist.svg';
import Text from '../../assets/img/icon-text.svg';
import Preview from '../../assets/img/icon-preview.svg';
import ScrollReveal from 'scrollreveal';

const Workflow = () => {
  return (
    <section className='workflow section'>
      <div className="workflow-container container">
        <div className="workflow-data">
          <h2 className='workflow-title'>Supercharge your workflow</h2>
          <p className='workflow-subtitle'>We’ve got the tools to boost your productivity.</p>
        </div>

        <div className="workflow-options">
          <div className="workflow-options-box">
            <img src={Blacklist} alt="" className='workflow-options-image'/>
            <h3 className="workflow-options-title">Create blacklists</h3>
            <p className="workflow-options-description">
              Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
            </p>
          </div>

          <div className="workflow-options-box">
            <img src={Text} alt="" className='workflow-options-image'/>
            <h3 className="workflow-options-title">Plain text snippets</h3>
            <p className="workflow-options-description">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>

          <div className="workflow-options-box">
            <img src={Preview} alt="" className='workflow-options-image'/>
            <h3 className="workflow-options-title">Sneak preview</h3>
            <p className="workflow-options-description">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

ScrollReveal().reveal('.workflow-container', {origin: 'top', distance: '60px', duration: 2500, delay: 400});
export default Workflow;