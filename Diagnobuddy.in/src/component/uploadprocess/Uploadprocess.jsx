import React from "react";
import "./uploadprocess.css"
function Uploadprocess() {
  return (
    <div>
      <div className="container-fluid mb-4">
        <div className="container uplo-pres">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex py-2 yy">
              <div className="prescri-img">
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
                  alt="Prescription Image"
                  className="ms-2"
                />
              </div>
              <div className="pp">
                <h3>Order with Prescription</h3>
                <p>Upload prescription and we will deliver your medicines</p>
                <a
                  href="./html/upload-prescription-complete Page.html"
                  className="btn btn-primary"
                >
                  <i className="bi bi-paperclip"></i> Upload
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 ps-4 py-2 zz">
              <p>How does this work</p>
              <div className="row njk">
                <div className="col-6 uplo-pres-process">
                  <i className="bi bi-1-circle-fill"></i>Upload a photo of your
                  prescription
                </div>
                <div className="col-6 uplo-pres-process">
                  <i className="bi bi-2-circle-fill"></i>Add delivery address
                  and place the order
                </div>
              </div>
              <div className="row">
                <div className="col-6 uplo-pres-process">
                  <i className="bi bi-3-circle-fill"></i>We will call you to
                  confirm the medicines
                </div>
                <div className="col-6 uplo-pres-process">
                  <i className="bi bi-4-circle-fill"></i>Now, sit back! your
                  medicines will get delivered at your doorstep
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uploadprocess;
