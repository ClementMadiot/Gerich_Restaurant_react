import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'

const Header = () => (
  <section id="home" className="app_header app_wrapper section_padding" >
    <div className="app_wrapper_info">
      <SubHeading subtitle="Chase the new flavour" title="the key to fine dining"/>
      <p className="p_opensans" style={{ margin:'2rem 0' }}>
      Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
      </p>
        <button type='button' className="custom_button">Explore Menu</button>
    </div>

    <div className="app_wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </section>
)

export default Header
