import React from 'react'
import CommonHeading from '../common/CommonHeading';
import { sliderData } from '../data/Data';

function Clients() {
  return (
    <div className="client">
      <div className="container">
        <div className="bar">
          <div className="left-bar">
            <div className="sm-logo">
              <img src="../assets/sm-logo.png" />
            </div>
            <div className="bar-title">
              <h3>Clients</h3>
            </div>
          </div>
        </div>
        <CommonHeading titlename="LATEST CLIENTS" />
      </div>
      <div class="slider">
        <div class="slide-track">
          {sliderData.map((slide,index) =>
          (
            <div class="slide" key={index}>
              <img src={slide.imgSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients