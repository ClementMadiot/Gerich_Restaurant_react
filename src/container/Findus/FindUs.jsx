import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
const FindUs = () => (
  <section id="contact" className="app_bg app_wrapper section_padding">
    <div className="app_wrapper_info">
      <SubHeading
        title="find us"
        subtitle="Contact"
        style={{ marginBottom: '3rem' }}
      />
      <div className="app_wrapper-content">
        <p className="p_opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p_cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p_opensans">Mon - Fri: 10:00 Am - 2:00 Am</p>
        <p className="p_opensans">Sat - Sun: 10:00 Am - 3:00 Am</p>
      </div>
      <button className="custom_button" style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className="app_wrapper_img">
      <img className='max-width-img' src={images.findus} alt="lemonade" />
    </div>
  </section>
)

export default FindUs
