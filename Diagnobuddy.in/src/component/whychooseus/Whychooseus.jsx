import React from "react";
import "./whychooseus.css"

function Whychooseus() {
  return (
    <>
      <div className="container why-choose-us mt-5">
        <div className="">
          <h2 className="Why-choose-us-heading heading-mainn">Why Choose Us</h2>
          <div className="why-choose">
            <div className="why-choose-us-container ">
              <div className="why-choose-img">
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/family.svg?dim=96x0"
                  alt=""
                />
              </div>
              <div className="why-choose-detail">
                <h6>32 Million+</h6>
                <p>Registered users as of Mar 31, 2022</p>
              </div>
            </div>
            <div className="why-choose-us-container ">
              <div className="why-choose-img">
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0"
                  alt=""
                />
              </div>
              <div className="why-choose-detail">
                <h6>36 Million+</h6>
                <p>Orders on Pharmeasy till date</p>
              </div>
            </div>
            <div className="why-choose-us-container ">
              <div className="why-choose-img">
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=96x0"
                  alt=""
                />
              </div>
              <div className="why-choose-detail">
                <h6>99000+</h6>
                <p>Unique items sold last 3 months</p>
              </div>
            </div>
            <div className="why-choose-us-container ">
              <div className="why-choose-img">
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=96x0"
                  alt=""
                />
              </div>
              <div className="why-choose-detail">
                <h6>19500+</h6>
                <p>Pin codes serviced last 3 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whychooseus;
