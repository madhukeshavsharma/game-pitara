import React from "react";
import Slider from "react-slick";
import img1 from "./Assets/img/experience/imag-1.png";
import img2 from "./Assets/img/experience/imag-2.png";
import img3 from "./Assets/img/experience/imag-3.png";
import img4 from "./Assets/img/experience/imag-4.png";


import { Link } from "react-router-dom";

import whyImg1 from "./Assets/img/why/Badge-1.png";
import whyImg2 from "./Assets/img/why/Badge-2.png";
import whyImg3 from "./Assets/img/why/Badge-3.png";
import whyImg4 from "./Assets/img/why/Badge-4.png";
import rpb from "./Assets/img/rpb.png";
import level from "./Assets/img/level.png";

const Experience = (props) => {
  let settings = {
    dots: false,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    vertical: false,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      }
    ]
  };

  return (
    <div className="experience">
      <div className="container-fluid">
        <div className="heading">
          <h3 className="mb-0">Experience our games</h3>
          <span>Sit back relax and be amazed by our games today.</span>
        </div>
        <div className="images">
          <div className="row">
            <Slider {...settings}>
              <div className="col-sm-12 mb-5">
                <div className="images__in">
                  <img src={img1} className="img-fluid" alt="" />
                  <div className="infoSection">
                    <Link to="#">Vikings Unleashed</Link>
                    <p>Blueprint Gaming</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 mb-5">
                <div className="images__in">
                  <img src={img2} className="img-fluid" alt="" />
                  <div className="infoSection">
                    <Link to="#">Naughty Girls Cabaret</Link>
                    <p>Evoplay Gaming</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 mb-5">
                <div className="images__in">
                  <img src={img3} className="img-fluid" alt="" />
                  <div className="infoSection">
                    <Link to="#">GamingJaguar Gold</Link>
                    <p>Skywind Gaming</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 mb-5">
                <div className="images__in">
                  <img src={img4} className="img-fluid" alt="" />
                  <div className="infoSection">
                    <Link to="#">Vikings Unleashed</Link>
                    <p>Blueprint Gaming</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
