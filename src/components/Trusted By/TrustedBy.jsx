import React from "react";
import "./TrustedBy.css"; // Import your custom CSS file

const TrustedBy = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div className="circle orange">
            <span><span className="circle-text">5+</span> years</span>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div className="circle dark">
            <span><span className="circle-text">20+</span> success stories</span>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div className="circle light">
            <div className="circle-text">digitalization</div>
            <div className="circle-text">reengineering</div>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div className="circle blue">
            <div className="circle-text">Germany </div>
            <div className="circle-text"> Switzerland </div>
            <div className="circle-text">US </div>
            <div className="circle-text"> Israel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
