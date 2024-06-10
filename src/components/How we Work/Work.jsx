import React from "react";
import image from "../../images/underline4.svg";
import image1 from "../../images/work1.svg";
import image2 from "../../images/work2.svg";
import image3 from "../../images/work3.svg";
import image4 from "../../images/work4.svg";
import image5 from "../../images/work1.jpg";

const Work = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="display-3 fw-medium">How we work</div>
        <img src={image} alt="" className="img-fluid" />

        <div className="mt-5 rounded-4" style={{ border: "2px solid #ececec" }} onMouseEnter={(e) => {
            e.currentTarget.style.border = "2px solid #ccdcf6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "2px solid #ededed";
          }}>
          <div className="row">
            <div className="col-sm-7 p-4">
              <div className="d-flex gap-3">
                <img src={image1} alt="" className="img-fluid" />
                <div className="fs-5">
                  We work integrated with the customer’s team and get
                  involved in the business processes by 100%. Each of our team
                  members personally communicates with the customer’s team.
                </div>
              </div>
              <div className="d-flex gap-3 mt-4">
                <img src={image2} alt="" className="img-fluid" />
                <div className="fs-5">
                We flexibly respond to any changes on the way and quickly adapt to them. You will definitely enjoy our agility.
                </div>
              </div>
              <div className="d-flex gap-3 mt-4">
                <img src={image3} alt="" className="img-fluid" />
                <div className="fs-5">
                We always take initiative and suggest improvements where it’s truly necessary. The final result and quality of your solution is what matters for us first and foremost.
                </div>
              </div>
              {/* <div className="d-flex gap-3 mt-3">
                <img src={image4} alt="" className="img-fluid" />
                <div className="fs-5">
                We create transparent workflows with precise timing and reporting to the customer.
                </div>
              </div> */}
            </div>
            <div className="col-sm-5">
                <img src={image5} alt="" className="img-fluid rounded-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
