import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer class="w-100 py-4 flex-shrink-0">
      <div class="container py-4">
        <div class="row gy-4 gx-5">
          <div class="col-lg-4 col-md-6">
            <h5 className="h1" style={{ color: "yellow" }}>
              Our Future
            </h5>

            <p class="small text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p class="small text-white mb-0">
              &copy; Copyrights. All rights reserved.
              <Link class="text-primary" to="/" className="link">
                @Diagnobuddy.In
              </Link>
            </p>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class=" mb-3" style={{ color: "yellow" }}>
              Quick links
            </h5>
            <ul class="list-unstyled text-muted">
              <li>
                <Link to="/" className="link">Home</Link>
              </li>
              <li>
                <Link to="/" className="link">About</Link>
              </li>
              <li>
                <Link to="/" className="link">Get started</Link>
              </li>
              <li>
                <Link to="/" className="link">FAQ</Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class=" mb-3" style={{ color: "yellow" }}>
              Quick links
            </h5>
            <ul class="list-unstyled text-muted">
              <li>
                <Link to="/" className="link">Home</Link>
              </li>
              <li>
                <Link to="/" className="link">About</Link>
              </li>
              <li>
                <Link to="/" className="link">Get started</Link>
              </li>
              <li>
                <Link to="/" className="link">FAQ</Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <h5 class=" mb-3" style={{ color: "yellow" }}>
              Newsletter
            </h5>
            <p class="small text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <form action="#">
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary"
                  id="button-addon2"
                  type="button"
                >
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
