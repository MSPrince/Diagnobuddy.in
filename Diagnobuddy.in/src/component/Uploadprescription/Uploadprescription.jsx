import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./uploadprescription.css"

const Uploadprescription = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
      <>
        <div className="upload-prescription">
          <div className="container-fluid upload">
            <div className="container">
              <div className="upload-precre">
                <div>
                  <h4>What are you looking for?</h4>
                </div>
                <div className="mt-2">
                  <p>
                    Order with prescription.
                    <Link to="./html/upload-prescription-complete Page.html">
                      Upload Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-10">
                <div className="form">
                  <i className="fa fa-search"></i>
                  <input
                    id="searchInput"
                    type="text"
                    className="form-control form-input"
                    placeholder="Search anything..."
                    value={searchValue}
                    onChange={handleInputChange}
                  />
                  <span className="left-pan">
                    <i className="fa fa-microphone"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="product pb-1">
            <Link to="/" className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0"
                alt=""
              />
              <h5>Lab Tests</h5>
              <p>Up To 25% Off</p>
            </Link>

            <Link to="/" className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0"
                alt=""
              />
              <h5>Health Blogs</h5>
              <p>Up To 25% Off</p>
            </Link>
            <Link to="" className="product-list">
              <img src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0" />
              <h5>Plus</h5>
              <p>Up To 25% Off</p>
            </Link>
            <Link to="/" className="product-list">
              <img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0" />
              <h5>Offers</h5>
              <p>Up To 25% Off</p>
            </Link>
          </div>
        </div>
      </>
    );
};

export default Uploadprescription;
