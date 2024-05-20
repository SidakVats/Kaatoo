import React from "react";


// Imported Components 
import Arrow from "../Arrow";

const Services = () => {
  return (
    <>
      <div className="container mb-5">
        <p className="display-3 my-5 fw-medium">Core software services</p>
        <div className="row">
          <div class="col mt-2">
            <div className="rounded-4 px-3 py-4" style={{ border: "2px solid #ededed" }}>
              <div className="fs-4 mb-4 fw-semibold">Custom software development</div>
              <Arrow />
            </div>
          </div>
          <div class="col mt-2">
            <div className="rounded-4 px-3 py-4 text-white" style={{ backgroundColor:"#7a9cd2" }}>
              <div className="fs-4 mb-4 fw-semibold">Enterprise systems development</div>
              <Arrow />
            </div>
          </div>
          <div class="col mt-2">
            <div className="rounded-4 px-3 py-4" style={{ backgroundColor:"#f7f2ef" }}>
              <div className="fs-4 mb-4 fw-semibold">Cloud application development</div>
              <Arrow />
            </div>
          </div>
          <div class="col mt-2">
            <div className="rounded-4 px-3 py-4 text-white" style={{ backgroundColor:"#ff6634" }}>
              <div className="fs-4 mb-4 fw-semibold">DevOps services and solutions </div>
              <Arrow />
            </div>
          </div>
        </div>

        <div className="row mt-3">
        <div class="col mt-2">
            <div className="rounded-4 px-3 py-4" style={{ backgroundColor:"#ccdcf6" }}>
              <div className="fs-4 mb-4 fw-semibold">Software <br />maintenance</div>
              <Arrow />
            </div>
          </div>
          <div class="col mt-2">
            <div className="rounded-4 px-3 py-4 text-white" style={{ backgroundColor:"#ff6634" }}>
              <div className="fs-4 mb-4 fw-semibold">IT <br />outsourcing</div>
              <Arrow />
            </div>
          </div>
          <div class="col mt-2">
            <div className="rounded-4 px-3 py-4" style={{ backgroundColor:"#fffdfd", border: "2px solid #ededed" }}>
              <div className="fs-4 mb-4 fw-semibold">AI <br />development</div>
              <Arrow />
            </div>
          </div>
          <div class="col mt-2">
            <div className="rounded-4 px-3 py-4" style={{ backgroundColor:"#ececec" }}>
              <div className="fs-4 mb-4 fw-semibold">IT <br />consulting</div>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
