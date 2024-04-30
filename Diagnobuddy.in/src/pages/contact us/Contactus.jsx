import React, { useState } from "react";
import "./contactus.css"
import Topbar from './../../component/topbar/Topbar';
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    email: "",
    slotTime: "",
    chosenTest: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://v1.nocodeapi.com/msprince/google_sheets/HWlSnOGImTSwSlYd?tabId=Sheet1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          formData.name,
          formData.age,
          formData.address,
          formData.phone,
          formData.email,
          formData.slotTime,
          formData.chosenTest,
          formData.message,
          new Date().toISOString(),
        ]),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    await response.json();

    // Reset form fields
    setFormData({
      name: "",
      age: "",
      address: "",
      phone: "",
      email: "",
      slotTime: "",
      chosenTest: "",
      message: "",
    });

    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit form. Please try again later.");
  }
};




  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container-fluid py-3 contact-us">
        <div className="container ">
        
            <h1 className="text-center">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone No
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="slotTime" className="form-label">
                  Slot Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="slotTime"
                  name="slotTime"
                  value={formData.slotTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="chosenTest" className="form-label">
                  Choose Test
                </label>
                <select
                  className="form-select"
                  id="chosenTest"
                  name="chosenTest"
                  value={formData.chosenTest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Test</option>
                  <option value="test1">Test 1</option>
                  <option value="test2">Test 2</option>
                  <option value="test3">Test 3</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Write a Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
   

      <Footer />
    </>
  );
}

export default Contactus;
