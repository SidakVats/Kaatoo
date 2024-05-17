import React from "react";
import image1 from "../../images/chooseus1.png";
import image2 from "../../images/chooseus2.png";
import image3 from "../../images/chooseus3.png";

const ChooseUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="display-4 fw-medium mt-5 mb-3">Clients select us for</div>
          <div className="col-sm-4 mt-4">
            <img src={image1} alt="image1" className="img-fluid" />
            <div className="mt-3 text-capatalized fs-2 fw-semibold mb-2">
              Credibility
            </div>
            <div className="fs-5">
              TYMIQ is a truly reliable partner who works inclusively and
              seamlessly integrates with the customers’ team.
            </div>
          </div>
          <div className="col-sm-4">
            <div className="mt-3 text-capatalized fs-2 fw-semibold mb-2">
              Proficiency
            </div>
            <div className="fs-5 mb-3">
              We provide rare, deep expertise in software reengineering and
              digitalization, making TYMIQ experts a valuable addition to your
              team.
            </div>
            <img src={image2} alt="image1" className="img-fluid" />
          </div>
          <div className="col-sm-4 mt-4">
            <img src={image3} alt="image1" className="img-fluid" />
            <div className="mt-3 text-capatalized fs-2 fw-semibold mb-2">
              Focus on value
            </div>
            <div className="fs-5">
              We help our clients gain tangible benefits from their solutions,
              allocating engineering resources for optimal outcomes.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
