import React, { useEffect } from 'react'
import CommonHeading from '../components/common/CommonHeading';
import { swiperbtns, workSlide } from '../components/data/Data';

function Work()
{
  useEffect(() => {
    document.title = "Work | Codebase";
  });
  return (
    <div className="container">
      <CommonHeading titlename="Our Work" />
      <div className="swiper-btns">
        <button className="btn">All</button>
        {swiperbtns.map((btn) => (
          <button className="btn" key={btn.id}>
            {btn.title}
          </button>
        ))}
      </div>
      <div className="workSlide">
        {workSlide.map((slide, index) => (
          <div key={index} className="slides">
            <img className="box-img" src={slide.src} />
            <button className="box-button">{slide.btn}</button>
            <p className="box-p">{slide.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work