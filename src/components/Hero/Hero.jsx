import React from "react";

// Images 
import image from "../../images/hero1.jpg";
import image2 from "../../images/hero2.svg";
import image3 from "../../images/hero3.png";
import image4 from "../../images/hero-brand.svg";
import image5 from "../../images/hero-brand2.svg";
import image6 from "../../images/hero-brand3.svg";
import image7 from "../../images/hero-brand4.svg";

const Hero = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row mx-auto">
          <div className="col-sm-6 rounded-3 px-4 py-4" style={{ border: "2px solid #ededed" }}>
            <div className="display-3 fw-medium">Reliable Software</div>
            <div className="display-3 fw-medium">Development</div>
            <div className="display-3 fw-medium">Company</div>
            <div className="pt-4 fs-5">
              Achieve your business goals by creating innovative digital solutions with our software development services
            </div>
            <button className="btn rounded-4 text-white fs-5 px-4 py-2 fw-semibold text-capatilized mt-4 button1" style={{ backgroundColor: "#f0734a" }}>
              Talk with our experts
            </button>
          </div>
          <div className="col-sm-6">
            <img src={image} alt="image" className="img-fluid rounded-3 mt-2 object-fit-cover" />
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-6">
            <div className="container mx-auto">
              <div className="row">
                <div className="col-sm-5 rounded-4 px-4 pb-3 pt-5 mt-2 text-white" style={{ backgroundColor: "black" }}>
                  <div className="fs-1 pt-5">95%</div>
                  <div className="fs-4 pb-4">clients retention</div>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-6 rounded-4 px-4 pb-3 pt-5 mt-2 text-black" style={{ backgroundColor: "#ececec" }}>
                  <div className="fs-1 pt-5">100+</div>
                  <div className="fs-4">projects implemented</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="rounded-3 px-4 py-3 mt-2" style={{ border: "2px solid #ededed" }}>
              <div>
                “Kaatoo are goal- and outcome-oriented, able to see the big picture, flexible where necessary, and rigid where appropriate.
                Deliverables are with almost no exceptions on time, within budget and performant (which is confirmed by extensive testing, and customer feedback).”
              </div>
              <div className="d-flex">
                <div>
                  <div className="d-flex gap-2">
                    <div className="mt-5 fw-bold">Christian Hasenfratz</div>
                    <a href="">
                      <img src={image2} alt="linkedin" className="img-fluid mt-5" />
                    </a>
                  </div>
                  <div className="">CEO, Swissphone Digital Solutions AG</div>
                </div>
                <img src={image3} alt="image3" className="img-fluid mt-5 ms-3" style={{ height: "50px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 text-center">
        <div className="desktop-view row">
          <div className="col-sm-3">
            <img src={image4} alt="brand" className="img-fluid" />
          </div>
          <div className="col-sm-3">
            <img src={image5} alt="brand2" className="img-fluid" />
          </div>
          <div className="col-sm-3">
            <img src={image6} alt="brand3" className="img-fluid" />
          </div>
          <div className="col-sm-3">
            <img src={image7} alt="brand4" className="img-fluid" />
          </div>
        </div>
        <div className="mobile-view">
          <marquee scrollamount="8">
            <img src={image4} alt="brand" className="img-fluid mx-3" />
            <img src={image5} alt="brand2" className="img-fluid mx-3" />
            <img src={image6} alt="brand3" className="img-fluid mx-3" />
            <img src={image7} alt="brand4" className="img-fluid mx-3" />
          </marquee>
        </div>
      </div>

      <style jsx>{`
        .mobile-view {
          display: none;
        }
        @media (max-width: 576px) {
          .desktop-view {
            display: none;
          }
          .mobile-view {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
