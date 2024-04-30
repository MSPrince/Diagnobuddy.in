import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="register">
        <div className="register-container">
          <h2>Join With Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />

            <button type="submit">Signup</button>
          </form>

          <p>
            Already have an account? <Link to="/" href="#">Login</Link>
          </p>
          <hr />
          <div className=" ms-auto">
            <img
              className="ms-auto"
              src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg"
              alt=""
              style={{ width: "50px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
