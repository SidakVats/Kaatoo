import React from "react";

import image from "../images/underline6.svg";
import ServicesPage from "../components/Services Page/ServicesPage";

const Services = () => {
  return (
    <>
      <div className="container">
        <div style={{ paddingTop: "120px" }}>
          <nav aria-label="breadcrumb" style={{ cursor: "pointer" }}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item fs-5">
                <a href="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item fs-5 active" aria-current="page">
                <a
                  href="/services"
                  style={{ textDecoration: "none", color: "#ff6634" }}
                >
                  Services
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ borderBottom: "2px solid #ededed" }}
      >
        <div className="container mt-5 pt-2">
          <div className="row">
            <div className="col-sm-6 mt-2">
              <div
                className=" fw-semibold text-uppercase"
                style={{ fontSize: "70px" }}
              >
                Services
              </div>
              <div className="fs-1"></div>
              <img src={image} alt="underline svg" className="img-fluid" />
            </div>
            <div className="col-sm-6 mb-5 mt-2">
              <div
                className="fs-5 p-3 rounded-4"
                style={{ border: "2px solid #ececec" }}
              >
                The main purpose of our IT services is to solve your business
                problems and bring maximum value to your company. Focus on your
                core business tasks with Kaatoo taking care of all your IT
                matters.
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesPage />
    </>
  );
};

export default Services;
