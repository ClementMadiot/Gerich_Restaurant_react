import React from 'react';

import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import './Laurels.css';

const AwardCard = ({ award: {imgUrl, title, subtitle} }) => (
  <div className="app_laurels_awards-card">
  <img src={imgUrl} alt={`award of ${title}`}/>
  <div className="app_laurels_award_content">
    <p className="p_cormorant" style={{color:'#DCCA87'}}>{title}</p>
    <p className="p_cormorant">{subtitle}</p>
  </div>
</div>
)

const Laurels = () => (
  <section id='awards' className='app_bg app_wrapper section_padding'>
    <article className="app_wrapper_info">
      <SubHeading subtitle="awards & recognition" title="our laurels"/>

      <div className="app_laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </article>

    <div className="app_wrapper_img">
<img src={images.laurels} alt="laurels" />
    </div>
  </section>
);

export default Laurels;
