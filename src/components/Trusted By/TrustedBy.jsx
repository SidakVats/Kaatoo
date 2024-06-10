import React from "react";
import "./TrustedBy.css"; // Import your custom CSS file

import image from "../../images/arrow1.svg";
import image2 from "../../images/arrow2.svg";

const TrustedBy = () => {
  return (
    <div className="container my-5">
      <p className="fs-1 fw-medium pb-5">Trusted by industry leading companies from Insurance, Manufacturing, and IoT</p>
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-3 col-md-6 text-center mb-4">
          <p className="fs-4 text-start" style={{ textDecoration: "underline" }}>Average partnership</p>
          <img src={image} alt="arrow" className="img-fluid arrow-img me-5 pe-5" />
          <div className="circle orange mx-auto">
            <span className="fs-4">
              <span className="circle-text-large">5+</span> years
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center mb-4">
          <p className="fs-4 text-end" style={{ textDecoration: "underline" }}>Portfolio With</p>
          <img src={image2} alt="arrow" className="img-fluid arrow-img ms-5 ps-5" />
          <div className="circle dark mx-auto">
            <div className="circle-text-container">
              <span className="circle-text-large">20+</span>
              <span className="circle-text">success stories</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center mb-4">
          <p className="fs-4 text-start" style={{ textDecoration: "underline" }}>Focus On</p>
          <img src={image} alt="arrow" className="img-fluid arrow-img me-5 pe-5" />
          <div className="circle light mx-auto">
            <div className="circle-text">digitalization</div>
            <div className="circle-text">reengineering</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center mb-4">
          <p className="fs-4 text-end" style={{ textDecoration: "underline" }}>Client Geography</p>
          <img src={image2} alt="arrow" className="img-fluid arrow-img ms-5 ps-5" />
          <div className="circle blue mx-auto">
            <div className="circle-text">Canada</div>
            <div className="circle-text">US</div>
            <div className="circle-text">Germany</div>
            <div className="circle-text">Switzerland</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
