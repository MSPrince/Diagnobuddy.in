import React from 'react'
import "./certification.css"
import Topbar from '../../component/topbar/Topbar';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';

function Certification() {
  return (
    <>
      <Topbar />
      <Navbar />
      {/* <div>
        <img
          src="https://img.freepik.com/premium-vector/coming-soon-banner-brick-wall-background-template-with-3d-editable-text-effect_622741-72.jpg?w=996"
          alt=""
          style={{ width: "100%", height: "500px" }}
        />
      </div> */}

      <div className="container-fluid py-5 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <a href="#" className="card-link">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://upload.wikimedia.org/wikipedia/en/d/d4/NABL_Official_LOGO_Registered.png"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">gcgccuc</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6">
              <a href="#" className="card-link">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://researchersjob.com/wp-content/uploads/2018/12/ICMRimg-e1544010452166.png"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">gcgccuc</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6">
              <a href="#" className="card-link">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://png.pngtree.com/png-vector/20220905/ourmid/pngtree-iso-14001-certified-company-logo-badge-png-image_6137639.png"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">gcgccuc</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Certification
