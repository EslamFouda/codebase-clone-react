import React from "react";
import CommonHeading from "../common/CommonHeading";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination, Mousewheel } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";
import { swiperbtns, swiperSlide } from "../data/Data";
function Work() {
  const swiper = useSwiper();
  return (
    <div className="work">
      <div className="container border-b">
        <div className="bar">
          <div className="left-bar">
            <div className="sm-logo">
              <img src="../assets/sm-logo.png" />
            </div>
            <div className="bar-title">
              <h3>WORK</h3>
            </div>
          </div>
          <div className="right-bar">
            <h3>LATEST WORK</h3>
          </div>
        </div>
        <CommonHeading titlename="Our Work" />
        <div className="swiper-container">
          <div className="swiper-btns">
            {swiperbtns.map((btn) => (
              <button className="btn" key={btn.id}>
                {btn.title}
              </button>
            ))}
          </div>
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            mousewheel={{
              sensitivity: 1,
            }}
            modules={[Pagination, Mousewheel]}
            className="mySwiper"
          >
            {swiperSlide.map((swiper, index) => (
              <SwiperSlide key={index}>
                <img className="box-img" src={swiper.src} />
                <button className="box-button">{swiper.btn}</button>
                <p className="box-p">{swiper.info}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="more">
            <Link to="/work" className="link">
              MORE WORK
            </Link>
            <img src="../assets/Arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
