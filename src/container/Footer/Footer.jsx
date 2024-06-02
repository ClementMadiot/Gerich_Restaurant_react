import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => (
  <footer id="login">
    <FooterOverlay />
    <Newsletter />
    <article className="app_footer-links">
      <div className="app_footer-links_contact">
        <h1 className="app_footer-headtext">contact</h1>
        <p className="p_opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p_opensans">+1 212-344-1230</p>
        <p className="p_opensans">+1 212-555-1230</p>
      </div>
      <div className="app_footer-links_logo">
        <img src={images.gericht} alt="Geritch logo" />
        <p className="p_opensans">"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <img src={images.spoon} alt="spoon" className='spoon_img' style={{marginTop: 15}} />
        <div className="app_footer-links_icons">
        <FiFacebook/>
        <FiTwitter/>
        <FiInstagram/>
        </div>
      </div>
      <div className="app_footer-links_work">
      <h1 className="app_footer-headtext">working hours</h1>
        <p className="p_opensans">Monday-Friday:</p>
        <p className="p_opensans">08:00 Am - 12:00 Am</p>
        <p className="p_opensans">Saturday-Sunday:</p>
        <p className="p_opensans">07:00 Am - 11:00 Am</p>
      </div>
    </article>
      <div className="footer-copyright">
        <p className="p_opensans">2024 Gerítch. All Rights Reserved</p>
      </div>
  </footer>
)

export default Footer
