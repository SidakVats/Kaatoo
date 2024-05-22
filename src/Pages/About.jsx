import React from "react";
import Values from "../components/Our Values/Values";
import Work from "../components/How we Work/Work";
import Brings from "../components/What brings client to us/Brings";
import TrustedBy from "../components/Trusted By/TrustedBy";
import Contact from "../components/Contact Banner/Contact";

import image from "../images/underline5.svg";

const About = () => {
  return (
    <>
      {/* Breadcrumps  */}
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
                  href="/contact"
                  style={{ textDecoration: "none", color: "#ff6634" }}
                >
                  About
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-fluid" style={{ borderBottom: "2px solid #ededed" }}>
      <div className="container mt-5 pt-2"  >
        <div className="row">
          <div className="col-sm-6">
            <div className="fs-1 fw-bold">
              <span style={{color: "#ff855e"}} className="">KAATOO</span>–YOUR SINGLE PARTNER in all IT matters
            </div>
            <div className="fs-1"></div>
            <img src={image} alt="underline svg" className="img-fluid" />
          </div>
          <div className="col-sm-6 mb-5">
            <div className="fs-5 p-3 rounded-4" style={{border:"2px solid #ececec"}}>
              Helping mid-size and large companies fulfill complex technical
              tasks around digitalization and automation of their systems and
              processes. ‍ <br/>
             <span style={{color: "#ff855e"}}> We are proud of our experience in custom software
              development and trustworthy relationships we build with our
              clients.</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <TrustedBy />
      <Brings />
      <Values />
      <Work />
      <Contact />
    </>
  );
};

export default About;
