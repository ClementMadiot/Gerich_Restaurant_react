import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './FooterOverlay.css';

const FooterOverlay = () => (
  <article className='app_footerOverlay'>
    <div className="app_footerOverlay-black"></div>
    <div className="app_footerOverlay-img app_bg"></div>
  </article>
);

export default FooterOverlay;
