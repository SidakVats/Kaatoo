import React from "react";

import image from "../images/underline3.svg";
import image2 from "../images/contact1.svg";
import ContactForm1 from "../components/Contact Form/ContactForm1";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

import RecentActorsIcon from '@mui/icons-material/RecentActors';

const Contact = () => {
  return (
    <>

      <div className="container">
        <div style={{ paddingTop: "120px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", fontSize:"15px" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
              Home
            </Link>
            <Link href="/contact" style={{textDecoration:"none", color:"none"}} >
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="#f0734a"
            >
              <RecentActorsIcon sx={{ mr: 0.5 }} fontSize="small" />
              Contact
            </Typography>
              </Link>
          </Breadcrumbs>
        </div>
      </div>

      {/* Contact Us Banner  */}
      <div
        className="container-fluid mt-5 pt-5"
        style={{ borderBottom: "2px solid #ededed" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-5">
              <div className="display-1 fw-medium">CONTACT US</div>
              <img src={image} alt="svg" className="img-fluid" />
            </div>
            <div className="col-sm-6 mb-5">
              <div className="fs-5">
                Your engineering potential is higher than you think. Contact us
                to learn all the options to resolve your IT challenges.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form  */}
      <ContactForm1 />

      <div className="container">
        <div className="row">
          <div className="col-sm-4 mt-2">
            <div
              className="rounded-4 p-3"
              style={{ border: "2px solid #ececec" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="d-flex gap-3 mt-2">
                <img src={image2} alt="" className="img-fluid" />
                <span style={{ color: "#7a9cd2" }} className="fs-5">
                  <span className="fw-semibold">Poland</span> (Head office)
                </span>
              </div>
              <div className="fs-5 ps-2 mt-2 mb-2">
                st. Heweliusza 18, 60-281, Poznan
              </div>
            </div>
          </div>
          <div className="col-sm-4 mt-2">
            <div
              className="rounded-4 p-3"
              style={{ border: "2px solid #ececec" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="d-flex gap-3 mt-2">
                <img src={image2} alt="" className="img-fluid" />
                <span style={{ color: "#7a9cd2" }} className="fs-5">
                  <span className="fw-semibold">Poland</span>
                </span>
              </div>
              <div className="fs-5 ps-2 mt-2 mb-2">
                st. Szpitalna 8/6, Warszawa
              </div>
            </div>
          </div>
          <div className="col-sm-4 mt-2">
            <div
              className="rounded-4 p-3"
              style={{ border: "2px solid #ececec" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #ccdcf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid #ededed";
              }}
            >
              <div className="d-flex gap-3 mt-2">
                <img src={image2} alt="" className="img-fluid" />
                <span style={{ color: "#7a9cd2" }} className="fs-5">
                  <span className="fw-semibold">Germany</span>
                </span>
              </div>
              <div className="fs-5 ps-2 mt-2 mb-2">
                st. Feringastraße 6, Unterföhring
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
