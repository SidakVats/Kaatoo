import React, { useState } from "react";

import image from "../../images/login1.svg";
import image1 from "../../images/login2.svg";

import image2 from "../../images/linkedin.svg";
import image3 from "../../images/login4.png";
import image4 from "../../images/login5.png";

import ReCAPTCHA from "react-google-recaptcha";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

const ContactForm1 = () => {
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
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
                <TextField
                  type="text"
                  id="outlined-basic"
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  color="warning"
                  margin="normal"
                  required
                />

                <TextField
                  type="email"
                  id="outlined-basic"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  color="warning"
                  margin="normal"
                  required
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Describe Your Challange"
                  color="warning"
                  margin="normal"
                  required
                  fullWidth
                  multiline
                  rows={5}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      // defaultChecked
                      sx={{
                        color: "gray",
                        "&.Mui-checked": {
                          color: "#f0734a",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography>
                      I accept the{" "}
                      <span style={{ color: "#534fff" }}>
                        <a
                          href="/privacypolicy"
                          style={{ textDecoration: "none" }}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </Typography>
                  }
                />

                <ReCAPTCHA
                  sitekey="6LcY1OQpAAAAAFO7R63wgVaR09kEVA3El9Ly_Z45"
                  onChange={onChange}
                  className="mt-3"
                />

                <div className="mt-3">
                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    size="large"
                    disabled={!verified}
                  >
                    Submit
                  </Button>
                </div>
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

              {/* <div className="container mt-5">
                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="ms-1" style={{ color: "#cdcdcd" }}>
                      Phone
                    </div>
                    <div className="mt-2 flex">
                      <img
                        src={image2}
                        alt="image"
                        className="img-fluid"
                        width={25}
                      />
                      <span className="ms-2">@Kaatoo.ca</span>
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
              </div> */}

              <div className="container mt-5">
                {/* <p style={{ color: "#7a9cd2" }}>
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
                    <div>Chief Strategy Officer</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm1;
