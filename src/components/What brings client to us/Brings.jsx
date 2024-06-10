import React from "react";

import "../../components/What brings client to us/Brings.css";

import image from "../../images/bring1.png";
import image1 from "../../images/bring2.jpg";
import image2 from "../../images/bring3.jpg";

import { GoArrowUpRight } from "react-icons/go";

const Brings = () => {
  return (
    <>
      <section id="tabs">
        <div class="container">
          <h6 class="display-4 fw-medium my-5">What brings clients to us</h6>
          <div class="row">
            <div class="col-xs-12 ">
              <nav>
                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Credibility
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Proficiency
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Focus on value
                  </a>
                </div>
              </nav>
              <div class="tab-content py-3 px- px-sm-0" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div
                    className="rounded-4 p-2"
                    style={{ border: "2px solid #ececec" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6 py-4 ps-4">
                          <p className="fs-3 fw-medium">
                            Search for a truly reliable partner who works
                            inclusively
                          </p>
                          <p className="fs-5 ">
                            Kaatoo considers your specific needs and setup to
                            bring the required experts or even build a dedicated
                            team with the missing technologies.
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <img
                            src={image}
                            alt="image1"
                            className="img-fluid rounded-4 shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div
                    className="rounded-4 p-2"
                    style={{ border: "2px solid #ececec" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={image1}
                            alt="image2"
                            className="img-fluid rounded-4 shadow-sm"
                          />
                        </div>
                        <div className="col-sm-8 py-4 ps-4">
                          <p className="fs-3 fw-medium">
                            Need for fairly rare expertise in software
                            reengineering and digitalization
                          </p>
                          <p className="fs-5">
                            We are always ready to put your painful legacy
                            systems and applications back on track and bring
                            additional value to your business.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div
                    className="rounded-4 p-2"
                    style={{ border: "2px solid #ececec" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-8 py-4 ps-4">
                          <p className="fs-3 fw-medium">
                            Shortfall in revenue due to inefficient processes
                            and technical solutions
                          </p>
                          <p className="fs-5">
                            All our clients gained higher value from their
                            solutions by making the wise relocation of
                            engineering resources towards productivity.
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <img
                            src={image2}
                            alt="image3"
                            className="img-fluid rounded-4 shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brings;
