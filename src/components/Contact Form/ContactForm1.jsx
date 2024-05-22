import React from "react";

import image from "../../images/login1.svg";
import image1 from "../../images/login2.svg";

import image2 from "../../images/login3.png";
import image3 from "../../images/login4.png";
import image4 from "../../images/login5.png";

const ContactForm1 = () => {
  return (
    <>
      <div className="container">
        <p className="display-4 mt-5 fw-medium">We’d like to hear from you</p>
        <div
          className="rounded-4 my-5"
          style={{ border: "2px solid #ececec" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "2px solid #ccdcf6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "2px solid #ededed";
          }}
        >
          <div className="row p-4">
            <div className="col-sm-6 mt-5">
              <p className="fs-5" style={{ color: "#7a9cd2" }}>
                Leave us a message
              </p>
              <form action="" className="mt-5">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="rounded-3 outline-black px-2 py-2"
                  style={{
                    border: "2px solid #ececec",
                    backgroundColor: " #fbfbfb",
                    borderRadius: "9px",
                    width: "100%",
                  }}
                />
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="rounded-3 outline-black px-2 py-2 mt-4"
                  style={{
                    border: "2px solid #ececec",
                    backgroundColor: " #fbfbfb",
                    borderRadius: "9px",
                    width: "100%",
                  }}
                />

                <textarea
                  name=""
                  id=""
                  placeholder="Describe your challange"
                  className="rounded-3 outline-black px-2 py-2 mt-4"
                  style={{
                    border: "2px solid #ececec",
                    backgroundColor: " #fbfbfb",
                    borderRadius: "9px",
                    width: "100%",
                  }}
                />

                <button
                  className="btn rounded-4 text-white fs-5 fw-semibold text-capitalize px-5 py-2 mt-5"
                  style={{ backgroundColor: "#f0734a" }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-sm-6 mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="ms-1" style={{ color: "#cdcdcd" }}>
                      Phone
                    </div>
                    <div className="mt-2">
                      <img src={image} alt="" className="img-fluid" />
                      +91 9888339029
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="ms-1" style={{ color: "#cdcdcd" }}>
                      Email
                    </div>
                    <div className="mt-2">
                      <img src={image1} alt="" className="img-fluid" />
                      contact@kaatoo.com
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mt-5">
                <p style={{ color: "#7a9cd2" }}>
                  You will talk to our leadership
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <img src={image2} alt="" className="img-fluid" />
                    <div className="mt-2 fs-5" style={{ color: "#7794c4" }}>
                      Dzmitry
                    </div>
                    <div className="mb-4">Founder / CEO</div>
                  </div>
                  <div className="col-sm-4">
                    <img src={image3} alt="" className="img-fluid" />
                    <div className="mt-2 fs-5" style={{ color: "#7794c4" }}>
                      Kanstantsin
                    </div>
                    <div className="mb-4">Co-Founder / CTO</div>
                  </div>
                  <div className="col-sm-4">
                    <img src={image4} alt="" className="img-fluid" />
                    <div className="mt-2 fs-5" style={{ color: "#7794c4" }}>
                      Andrei
                    </div>
                    <div >Chief Strategy Officer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm1;
