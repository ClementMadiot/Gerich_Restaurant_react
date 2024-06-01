import React, { useRef } from 'react'
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.css'

const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }
  return (
    <section className="app_gallery flex_center">
      <article className="app_gallery-content">
        <SubHeading title="photo gallery" subtitle="Instagram" />
        <p className="p_opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button type="button" className="custom_button">
          View More
        </button>
      </article>
      <article className="app_gallery-images">
        <div className="app_gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image,index) => (
          <div key={`gallery-image-${index + 1}`} className="app_gallery-images_card flex_center">
            <img src={image} alt={`gallery-${index}`} />
            <BsInstagram className='gallery_image-icon'/>
          </div>
        ))}
        </div>
        <div className="app_gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery_arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery_arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </article>
    </section>
  )
}

export default Gallery
