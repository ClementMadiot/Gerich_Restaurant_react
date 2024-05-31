import React from 'react';

import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <section id='about' className='app_aboutus app_bg flex_center section_padding'>
    <div className="app_aboutus-overlay flex_center">
      <img src={images.G} alt="g letter" />
    </div>

    <article className="app_aboutus-content flex_center">
      {/* about us  */}
      <div className="app_aboutus-content_about">
        <h1 className="headtext_cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p_opensans" style={{ margin:'2rem 0' }}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
        <button type='button' className="custom_button">Know More</button>
      </div>
      {/* knife img */}
      <div className="app_aboutus-content_knife flex_center">
        <img src={images.knife} alt="knife" />
      </div>
      {/* our history  */}
      <div className="app_aboutus-content_history">
        <h1 className="headtext_cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p_opensans" style={{ margin:'2rem 0' }}>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
        <button type='button' className="custom_button">Know More</button>
      </div>
    </article>
  </section>
);

export default AboutUs;
