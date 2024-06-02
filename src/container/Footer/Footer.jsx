import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components'
import './Footer.css';

const Footer = () => (
  <footer id='login' className='section_padding'>
    <FooterOverlay/>
    <Newsletter/>
  </footer>
);

export default Footer;
