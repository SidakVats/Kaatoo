import React, { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

// Icons from react-icons
import { GoArrowUpRight } from "react-icons/go";

const Newsletter = () => {
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  return (
    <>
      <div className="container my-5 pt-5">
        <div className="rounded-4" style={{ backgroundColor: "#ccdcf6" }}>
          <div className="row p-5">
            <div className="col-sm-6 ">
              <p className="fs-3 fw-semibold">
                Get a free consultation from our experts on the implementation
                of your project
              </p>
            </div>
            <div className="col-sm-6 mt-2">
              <form action="">
                <div className="d-flex gap-3">
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="rounded-3 outline-black px-2 py-2"
                    required
                    style={{
                      border: "2px solid #fbfbfb",
                      backgroundColor: " #fbfbfb",
                      borderRadius: "9px",
                      width: "100%",
                    }}
                  />
                  <ReCAPTCHA
                    sitekey="6LdVxuQpAAAAAFBgq3KduEvf-OW4WOTaMkuiA6fU"
                    onChange={onChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-dark fs-3 rounded-circle pt-0"
                    disabled={!verified}
                  >
                    <GoArrowUpRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
