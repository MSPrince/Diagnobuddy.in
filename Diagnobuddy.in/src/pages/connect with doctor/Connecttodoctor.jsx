import React from 'react'
import Topbar from './../../component/topbar/Topbar';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';

function Connecttodoctor() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div>
        <img
          src="https://img.freepik.com/premium-vector/coming-soon-banner-brick-wall-background-template-with-3d-editable-text-effect_622741-72.jpg?w=996"
          alt=""
          style={{ width: "100%" , height:"500px" }}
        />
      </div>

      <Footer />
    </>
  );
}

export default Connecttodoctor
