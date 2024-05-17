import React from "react";
import image from "../../images/underline1.svg";
import image1 from "../../images/expertise1.png";
import image2 from "../../images/expertise2.png";
import image3 from "../../images/expertise3.png";
import image4 from "../../images/expertise4.png";
import image5 from "../../images/expertise5.png";
import image6 from "../../images/expertise6.png";
import Arrow from "../Arrow";

const Experties = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="fs-1">Key areas of expertise</div>
        <img
          src={image}
          alt=""
          className="img-fluid"
          style={{ width: "25%" }}
        />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div
              className="px-3 py-3 rounded-5"
              style={{ border: "2px solid #ededed" }}
            >
              {/* <div className="d-flex justify-content-between"> */}
              {/* <span
                  style={{ backgroundColor: "#ececec" }}
                  className="px-2 rounded-3 mt-5 text-center"
                > */}
              {/* <div className=" mx-auto">
                  <mark style={{backgroundColor: "#ececec"}}>50+ projects implemented</mark> */}
              {/* </span> */}
              {/* <img src={image1} alt="" className="img-fluid mx-5" />
                </div> */}
              <div className="container ">
                <div className="row ">
                  <div className="d-flex">
                    <div className="col-sm-3">
                      <img src={image1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-8 mt-4">
                      <mark className="ms-4 px-2 py-2 rounded-3" style={{ backgroundColor: "#ececec" }}>
                        50+ projects implemented
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 fs-2">
                Legacy system <br /> modernization
              </div>
              <div className="mt-3 mb-5">
                We helped 50+ companies optimize their work by migrating the
                systems in use to the latest technologies. While upgrading and
                stabilizing a software, we thoroughly analyze the key business
                and technical problems to add maximum value to the current
                solution. We pay much attention to the speed and security
                issues, as well as keep the system working during the whole
                process of migration.
              </div>
              <Arrow />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div
              className="px-3 py-3 rounded-5"
              style={{ border: "2px solid #ededed" }}
            >
               <div className="container ">
                <div className="row ">
                  <div className="d-flex">
                    <div className="col-sm-3">
                      <img src={image2} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-8 mt-4">
                      <mark className="ms-4 px-2 py-2 rounded-3" style={{ backgroundColor: "#ececec" }}>
                        100+ projects implemented
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 fs-2">
                Enterprise software <br />
                development
              </div>
              <div className="mt-3 mb-5">
                We helped 100+ companies optimize their work by migrating the
                systems in use to the latest technologies. While upgrading and
                stabilizing a software, we thoroughly analyze the key business
                and technical problems to add maximum value to the current
                solution. We pay much attention to the speed and security
                issues, as well as keep the system working during the whole
                process of migration.
              </div>
              <Arrow />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div
              className="px-3 py-3 rounded-5"
              style={{ border: "2px solid #ededed" }}
            >
               <div className="container ">
                <div className="row ">
                  <div className="d-flex">
                    <div className="col-sm-3">
                      <img src={image3} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-8 mt-4">
                      <mark className="ms-4 px-2 py-2 rounded-3" style={{ backgroundColor: "#ececec" }}>
                        50+ projects implemented
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 fs-2">
                Cloud application <br /> development
              </div>
              <div className="mt-3 mb-5">
                We helped 50+ companies optimize their work by migrating the
                systems in use to the latest technologies. While upgrading and
                stabilizing a software, we thoroughly analyze the key business
                and technical problems to add maximum value to the current
                solution. We pay much attention to the speed and security
                issues, as well as keep the system working during the whole
                process of migration.
              </div>
              <Arrow />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div
              className="px-3 py-3 rounded-5"
              style={{ border: "2px solid #ededed" }}
            >
               <div className="container ">
                <div className="row ">
                  <div className="d-flex">
                    <div className="col-sm-3">
                      <img src={image4} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-8 mt-4">
                      <mark className="ms-4 px-2 py-2 rounded-3" style={{ backgroundColor: "#ececec" }}>
                        40+ projects implemented
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 fs-2">
                Architecture design <br /> for complex systems
              </div>
              <div className="mt-3 mb-5">
                We helped 50+ companies optimize their work by migrating the
                systems in use to the latest technologies. While upgrading and
                stabilizing a software, we thoroughly analyze the key business
                and technical problems to add maximum value to the current
                solution. We pay much attention to the speed and security
                issues, as well as keep the system working during the whole
                process of migration.
              </div>
              <Arrow />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div
              className="px-3 py-3 rounded-5"
              style={{ border: "2px solid #ededed" }}
            >
               <div className="container ">
                <div className="row ">
                  <div className="d-flex">
                    <div className="col-sm-3">
                      <img src={image5} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-8 mt-4">
                      <mark className="ms-4 px-2 py-2 rounded-3" style={{ backgroundColor: "#ececec" }}>
                        20+ projects implemented
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 fs-3 mb-4">
                Authentication and <br />
                authorization solutions
              </div>
              <div className="mt-3 mb-5">
                We helped 50+ companies optimize their work by migrating the
                systems in use to the latest technologies. While upgrading and
                stabilizing a software, we thoroughly analyze the key business
                and technical problems to add maximum value to the current
                solution. We pay much attention to the speed and security
                issues, as well as keep the system working during the whole
                process of migration.
              </div>
              <Arrow />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div
              className="px-3 py-3 rounded-5"
              style={{ border: "2px solid #ededed" }}
            >
               <div className="container ">
                <div className="row ">
                  <div className="d-flex">
                    <div className="col-sm-3">
                      <img src={image6} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-8 mt-4">
                      <mark className="ms-4 px-2 py-2 rounded-3" style={{ backgroundColor: "#ececec" }}>
                        30+ projects implemented
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 fs-2">
                Solutions for <br /> startups
              </div>
              <div className="mt-3 mb-5">
                We helped 50+ companies optimize their work by migrating the
                systems in use to the latest technologies. While upgrading and
                stabilizing a software, we thoroughly analyze the key business
                and technical problems to add maximum value to the current
                solution. We pay much attention to the speed and security
                issues, as well as keep the system working during the whole
                process of migration.
              </div>
              <Arrow />
            </div>
          </div>
        </div>

        <center>
          <button className="btn btn-outline-dark rounded-4 mt-5 px-5 py-2 fs-5">
            View more (6 areas)
          </button>
        </center>
      </div>
    </>
  );
};

export default Experties;
