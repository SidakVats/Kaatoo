import React from "react";

const Values = () => {
  return (
    <>
      <div className="container mt-5 pt-5" >
        <p className="fs-1 fw-semibold">Our values</p>
        <div className="fs-5 mt-4">
          All our team members embody our five values and make them shine
          through: expertise, engagement, quality, transparency, and
          reliability.
        </div>

        <div className="row mt-3">
          <div className="col-sm-4 mt-3">
            <div
              className="rounded-4 p-3"
              style={{ backgroundColor: "#f7f2ef" }}
            >
              <span
                className="rounded-5 px-4 text-center fs-4 fst-italic"
                style={{ backgroundColor: "white" }}
              >
                01
              </span>
              <div className="fs-3 fw-semibold mt-3">Expertise</div>
              <div className="fs-5">
                We can handle any technical challenge and deliver high-quality
                solutions based on the experience our team gains through diverse
                and interesting tasks.
              </div>
            </div>
          </div>
          <div className="col-sm-4 mt-3">
            <div
              className="rounded-4 p-3"
              style={{ backgroundColor: "#ff6634" }}
            >
              <span
                className="rounded-5 px-4 text-center fs-4 fst-italic"
                style={{ backgroundColor: "white" }}
              >
                02
              </span>
              <div className="fs-3 fw-semibold mt-3 text-white">Engagement</div>
              <div className="fs-5 text-white">
                While working on a project, we dive deep into the business logic
                and existing processes to see the picture from the same
                perspective.
              </div>
            </div>
          </div>
          <div className="col-sm-4 mt-3">
            <div
              className="rounded-4 p-3"
              style={{ backgroundColor: "#ccdcf6" }}
            >
              <span
                className="rounded-5 px-4 text-center fs-4 fst-italic"
                style={{ backgroundColor: "white" }}
              >
                03
              </span>
              <div className="fs-3 fw-semibold mt-3">Quality</div>
              <div className="fs-5">
                The unprecedented quality of our solutions is achieved due to
                high professionalism of our team and a robust quality assurance
                process.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-6 mt-3">
            <div
              className="rounded-4 p-3"
              style={{ backgroundColor: "#7a9cd2" }}
            >
              <span
                className="rounded-5 px-4 text-center fs-4 fst-italic"
                style={{ backgroundColor: "white" }}
              >
                04
              </span>
              <div className="fs-3 fw-semibold mt-3 text-white">
                Transparency
              </div>
              <div className="fs-5 text-white">
                Being fully open and willing for communication on any issues, we
                strive to create absolutely comfortable working conditions,
                where our customers can be calm about potential
                problems.
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-3">
            <div
              className="rounded-4 p-3"
              style={{ backgroundColor: "#181818" }}
            >
              <span
                className="rounded-5 px-4 text-center fs-4 fst-italic"
                style={{ backgroundColor: "white" }}
              >
                05
              </span>
              <div className="fs-3 fw-semibold mt-3 text-white">
                Reliability
              </div>
              <div className="fs-5 text-white">
                Kaatoo is a truly reliable partner who works inclusively and
                makes a single whole with the customer’s team, both in work and
                business culture.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
