import React from 'react'
import "./offerslider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Offerslider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container offer-slider">
          <Slider {...settings}>
            <div>
              <img
                src="https://cms-contents.pharmeasy.in/banner/c9a7fe04b13-Vein.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cms-contents.pharmeasy.in/banner/0091e3ce369-Free1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn01.pharmeasy.in/dam/banner/banner/dc74366217d-New_Slipper.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://cms-contents.pharmeasy.in/banner/c8d15593075-sddf.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://cms-contents.pharmeasy.in/banner/0307afea9cb-FULLBODY.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cms-contents.pharmeasy.in/banner/00439e47920-jmyj.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Offerslider
