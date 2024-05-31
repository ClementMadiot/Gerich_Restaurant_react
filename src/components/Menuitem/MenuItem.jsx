import React from 'react'

import './MenuItem.css'

const MenuItem = ({ title, price, tags }) => (
  <article className="app_menuItem">
    {/* title  */}
    <div className="app_menuItem-head">
      <div className="app_menuItem-name">
        <p className="p_cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>
    {/* price */}
    <div className="app_menuItem-dash" />
    <div className="app_menuItem-head">
      <div className="app_menuItem-price">
        <p className="p_cormorant">{price}</p>
      </div>
    </div>
    </div>
    {/* tags  */}
    <div className="app_menuItem-sub">
      <p className="p_opensans" style={{color:'#AAA'}}>{tags}</p>
    </div>
  </article>
)

export default MenuItem
