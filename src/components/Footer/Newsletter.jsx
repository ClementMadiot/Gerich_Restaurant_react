import React from 'react';

import  SubHeading  from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <article className='app_newsletter'>
    <div className="app_newsletter-heading">
      <SubHeading title="subscribe to our newsletter" subtitle="Newsletter"/>
      <p className="p_opensans">And Never Miss Latest Updated!</p>
    </div>
    <form action='submit' className="app_newsletter-input flex_center">
      <input type="email" placeholder='Enter your e-mail'/>
      <button className="custom_button">Subscribe</button>
    </form>
  </article>
);

export default Newsletter;
