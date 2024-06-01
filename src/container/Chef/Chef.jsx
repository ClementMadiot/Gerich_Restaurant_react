import React from 'react'

import { SubHeading } from '../../components'
import images from '../../constants/images'
import './Chef.css'

const Chef = () => (
  <section className="app_bg app_wrapper section_padding">
    <div className="app_wrapper_img app_wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app_wrapper_info">
      <SubHeading title="What We Believe In" subtitle="chef's word" />

      <div className="app_chef-content">
        <div className="app_chef-content_quote">
          <img className='tamere' src={images.quote} alt="quote" />
          <p className="p_opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
          </p>
        </div>
        <p className="p_opensans">
          Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
          Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie
          Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>
      </div>
      <div className="app_chef-sign">
        <p>Kevin Luo</p>
        <p className="p_opensans">Chef & Founder</p>
        <img src={images.sign} alt="chef's signature" />
      </div>
    </div>
  </section>
)

export default Chef
