import React from "react";


// Images 
import image from "../../images/working.png";
import image1 from "../../images/working2.png";

const Working = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <p className="display-3 fw-medium">Our working concepts</p>
        <div className="row mt-5">
          <div className="col-sm-8 mt-2">
            <div
              className="px-5 py-3 rounded-4"
              style={{ border: "2px solid #ededed", fontSize: "18px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              Kaatoo builds transparent and trustworthy relationships with every
              client and partner, assuming their business issues as our own and
              doing our utmost to find and implement the best solution. While
              working on a project, we dive deep into the business logic and
              existing processes and create a solid alliance with the client’s
              team to get better results. All this is achieved largely due to
              the smart approach we apply to the team distribution
            </div>
          </div>
          <div className="col-sm-4 mt-2">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row mt-5">
          <div className="col-sm-4 mb-2">
            <img src={image1} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <div
              className="px-5 py-2 rounded-4"
              style={{ border: "2px solid #ededed", fontSize: "18px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              Most of our projects are led by fixed teams composed of the people who have been working together for several years and perfectly match together. Such teams are built to operate as a well-coordinated and self-sufficient unit, where all team members together constitute a single whole in their competencies and roles. This also simplifies the onboarding process on new projects and ensure higher results in a shorter period of time. We start working quickly, while other need additional time to establish personal relationships inside the team and correctly allocate their responsibilities
              <br /><br />
              Kaatoo is commited to help mid-size and large companies fulfill complex technical tasks around digitalization and automation of their systems and processes. We are proud of our experience in custom software development and trustworthy relationships we build with our clients.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
