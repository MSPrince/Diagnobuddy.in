import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand css-text-mask" to="/">
            Diagnobuddy.In
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link className="nav-link me-3" to="/">
                  <i
                    className="fa-solid fa-house me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/labtest">
                  {" "}
                  <i
                    className="fa-solid fa-flask me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Lab Test{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/doctor">
                  <i
                    className="fa-solid fa-user-doctor me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Connect With Doctor{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/downloadreport">
                  <i
                    className="fa-solid fa-download me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Download Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/gallery">
                  <i
                    className="fa-solid fa-envira me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                 Gallery{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/contactus">
                  <i
                    className="fa-solid fa-phone me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Contact Us{" "}
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav lo">
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-link login1"
                  target="_parent"
                >
                  Login / SignUp
                </Link>
              </li>
            </ul>
          </div>{" "}
          {/* navbar-collapse.// */}
        </div>{" "}
        {/* container-fluid.// */}
      </nav>
    </>
  );
}

export default Navbar;
