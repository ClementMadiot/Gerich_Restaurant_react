import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'

const Header = () => (
  <div className="app_header app_wrapper section_padding" id="home">
    <div className="app_wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app_header-h1'>the key to fine dining</h1>
      <p className="p_opensans" style={{ margin:'2rem 0' }}>
      Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
      </p>
        <button type='button' className="custom_button">Explore Menu</button>
    </div>

    <div className="app_wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
)

export default Header
