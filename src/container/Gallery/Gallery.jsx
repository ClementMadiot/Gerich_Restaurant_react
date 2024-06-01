import React from 'react'
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.css'

const Gallery = () => {


  return (
    <section className='app_gallery flex_center'>
      <div className="app_gallery-content">
        <SubHeading title="photo gallery" subtitle="Instagram"/>
        <p className="p_opensans" style={{ color: "#AAA", marginTop: '2rem'}}></p>
      </div>

    </section>
  )
}

export default Gallery
