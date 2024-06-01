import React from 'react';

import { images } from '../../constants'
const SubHeading = ({ title, subtitle }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p_cormorant">{subtitle}</p>
    <img className='spoon_img' src={images.spoon} alt="spoon" />
    <h1 className="headtext_cormorant">{title}</h1>
  </div>
);

export default SubHeading;
