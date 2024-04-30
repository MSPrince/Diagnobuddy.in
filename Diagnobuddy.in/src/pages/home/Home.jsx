import React from "react";
import Topbar from "../../component/topbar/Topbar";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Uploadprescription from "../../component/Uploadprescription/Uploadprescription";
import Offerslider from "../../component/offerslider/Offerslider";
import Labtestbyhealthconcern from "../../component/labTestByHealthConcern/Labtestbyhealthconcern";
import Uploadprocess from "../../component/uploadprocess/Uploadprocess";
import Testcovered from "../../component/seo/testcovered/Testcovered";
import Whychooseus from "../../component/whychooseus/Whychooseus";
import Card from "../../component/frequentlyBookedLabTest/card/Card";

function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Uploadprescription />
      <Offerslider />
      <Labtestbyhealthconcern/>
      <Uploadprocess/>
      <Whychooseus/>
      <Testcovered/>
      <Card/>
      <Footer />
    </div>
  );
}

export default Home;
