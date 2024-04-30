import React from 'react'
import "./labtestbyhealthconcern.css"
const labTestsByHealthConcern = [
  {
    name: "Full Body",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    link: "",
  },
  {
    name: "Vitamins",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0",
    link: "",
  },
  {
    name: "Diabetes",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0",
    link: "",
  },
  {
    name: "Fever",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0",
    link: "",
  },
  {
    name: "Women Care",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0",
    link: "",
  },
  {
    name: "Thyroid",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0",
    link: "",
  },
  {
    name: "Covid",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=256x0",
    link: "",
  },
  {
    name: "Bone",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0",
    link: "",
  },
  {
    name: "Heart",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0",
    link: "",
  },
  {
    name: "Lifestyle",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0",
    link: "",
  },
];

const LabTestsByHealthConcern = () => {
  return (
    <div className="Lab-Tests-by-Health-Concern">
      {labTestsByHealthConcern.map((test, index) => (
        <div key={index} className="Lab-Tests-by-Health-Concern-img">
          <a href={test.link}>
            <img src={test.image} alt={test.name} />
          </a>
        </div>
      ))}
    </div>
  );
};
function Labtestbyhealthconcern() {
   return (
     <div className="container mt-3 Lab-Tests-by-Health-Concern-container">
       <h3 className="heading-mainn">Lab Tests by Health Concern</h3>
       <p>
         Powered by{" "}
         <span>
           <img
             src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
             alt=""
             width="100px"
           />
         </span>
       </p>
       <LabTestsByHealthConcern />
     </div>
   );
}

export default Labtestbyhealthconcern
