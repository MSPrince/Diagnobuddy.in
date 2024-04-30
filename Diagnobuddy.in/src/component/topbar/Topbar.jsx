import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

function Topbar() {
  return (
    <div className="superNav border-bottom py-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
            <span className="me-3">
              <i className="fa-solid fa-phone me-1 topbar"></i>
              <strong>
                <a href="tel:+91-789-717-3138" className="mobNo">
                  +91-789-717-3138
                </a>
              </strong>
            </span>

            <span className="me-3">
              <i className="fa-solid fa-envelope me-1 tab bar"></i>
              <strong>
                <a href="mailto:cgcgc@ccgj" className="mobNo">
                  vhcjhchjchjcvj
                </a>
              </strong>
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
            <span className="me-3">
              <i className="fa-solid fa-file topbar me-2"></i>
              <Link to="/certification" className="text-white shipping">
                Certification
              </Link>
            </span>
            <span className="me-3">
              <i className="fa-solid fa-file topbar me-2"></i>
              <Link to="/companypolicy" className="text-white shipping">
                Company Policy
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
