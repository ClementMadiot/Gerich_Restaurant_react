import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurant } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app_navbar-links">
        <li className="p_opensans">
          <a href="#home"></a>Home
        </li>
        <li className="p_opensans">
          <a href="#about">About</a>
        </li>
        <li className="p_opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p_opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p_opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app_navbar-login">
        <a href="#login" className="p_opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p_opensans">
          Book Table
        </a>
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu
          className="overlay_open"
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {/* if toggleMenu is set to true then show this part of code  */}
        {toggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurant
              className="overlay_close"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app_navbar-smallscreen-links">
              <li className="p_opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p_opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p_opensans">
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li className="p_opensans">
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li className="p_opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
