import React, { useState } from "react";

import image from "../../images/services1.png";
import image1 from "../../images/services2.png";
import image2 from "../../images/services3.png";
import image3 from "../../images/services4.png";
import image4 from "../../images/services5.png";
import image5 from "../../images/services6.png";
import image6 from "../../images/services7.png";

import image7 from "../../images/services1.svg";
import image8 from "../../images/services2.svg";
import image9 from "../../images/services3.svg";
import image10 from "../../images/services4.svg";

import Contact from "../../components/Contact Banner/Contact";

import "./Services.css";

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState("coreServices");

  const getButtonStyle = (section) => {
    return section === activeSection
      ? { backgroundColor: "#f0f4fc", color: "#7a9cd2", cursor: "pointer" }
      : { backgroundColor: "#fff", color: "#7a9cd2", cursor: "pointer" };
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex gap-3">
          <div
            onClick={() => setActiveSection("coreServices")}
            style={getButtonStyle("coreServices")}
            className="px-4 py-2 fs-4 rounded-4 fw-medium"
          >
            Core software services
          </div>
          <div
            onClick={() => setActiveSection("areasOfExpertise")}
            style={getButtonStyle("areasOfExpertise")}
            className="px-4 py-2 fs-4 rounded-4 fw-medium"
          >
            Core areas of expertise
          </div>
        </div>

        {activeSection === "coreServices" && (
          <div id="first">
            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-5 fs-2">
                      Custom software development services
                    </div>
                    <div className="fs-5">
                      Implementing responsive and fault-tolerant software
                      according to your individual requirements.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image1} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-5 fs-2">
                      Software reengineering services
                    </div>
                    <div className="fs-5">
                      Expanding value from your software and optimizing your
                      business processes.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image5} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-5 fs-2">
                      Software maintenance services
                    </div>
                    <div className="fs-5">
                      Combining unique technical expertise, agile practices, and a
                      DevOps-driven culture, we offer software maintenance and
                      support services for customers across industries.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image2} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-5 fs-2">
                      DevOps services and solutions
                    </div>
                    <div className="fs-5">
                      Bringing unique resources to optimize your software
                      development life cycle (SDLC) processes.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image3} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-5 fs-2">
                      Mobile development services
                    </div>
                    <div className="fs-5">
                      Developing native and cross-platform apps for your specific
                      purposes.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image4} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-5 fs-2">
                      IT outsourcing services
                    </div>
                    <div className="fs-5">
                      Focus on your core business tasks with us taking care of
                      your IT matters.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image6} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-5 fs-2">
                      AI development services
                    </div>
                    <div className="fs-5">
                      Delivering AI-based solutions to automate your business
                      operations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "areasOfExpertise" && (
          <div id="second">
            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image7} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-4 fw-medium fs-4">
                      Identity and access management (IAM) services
                    </div>
                    <div className="fs-5">
                      Developing custom identity and access management solutions
                      to secure all authentication and authorization processes in
                      your application.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image8} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-4 fs-2">
                      Legacy system modernization services
                    </div>
                    <div className="fs-5">
                      Upgrade your systems on time to stay competitive in the
                      current fast-paced digital environment.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image10} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-4 fs-2">
                      Enterprise application development
                    </div>
                    <div className="fs-5">
                      Helping businesses reach their targets with highly
                      effective custom enterprise applications.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-5 gap-5 rounded-4 p-2"
              style={{ border: "2px solid #f4f3f3" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={image9} alt="image" className="img-fluid" />
                  </div>
                  <div className="col-sm-6">
                    <div className="mt-4 fs-2">
                      Cloud application development services
                    </div>
                    <div className="fs-5">
                      Boost the performance of your business with the power of
                      cloud-based applications.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Contact />
      </div>
    </>
  );
};

export default ServicesPage;
