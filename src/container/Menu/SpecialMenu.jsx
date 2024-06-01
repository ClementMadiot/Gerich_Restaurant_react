import React from 'react'

import { MenuItem, SubHeading } from '../../components'
import { images, data } from '../../constants'
import './SpecialMenu.css'

const SpecialMenu = () => (
  <section id="menu" className="app_specialMenu flex_center section_padding">
    <div className="app_specialMenu-title">
      <SubHeading title="Today's special" subtitle="menu that fits your palette" />
    </div>
    <article className="app_specialMenu-menu">
    {/* Wine & beer  */}
      <aside className="app_specialMenu-menu_wine flex_center">
        <h2 className="app_specialMenu-menu_heading">Wine & beer</h2>
        <div className="app_specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </aside>
      {/* Menu image  */}
      <div className="app_specialMenu-menu_img flex_center">
        <img src={images.menu} alt="menu" />
      </div>
      {/* Cocktails */}
      <aside className="app_specialMenu-menu_cocktails flex_center">
        <h2 className="app_specialMenu-menu_heading">Cocktails</h2>
        <div className="app_specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </aside>
    </article>
    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom_button">
        View More
      </button>
    </div>
  </section>
)

export default SpecialMenu
