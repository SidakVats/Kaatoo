import React from "react";

import image from "../images/underline6.svg";
import ServicesPage from "../components/Services Page/ServicesPage";


import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

import DesignServicesIcon from '@mui/icons-material/DesignServices';

const Services = () => {
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
            <Link href="/services" style={{textDecoration:"none", color:"none"}} >
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="#f0734a"
            >
              <DesignServicesIcon sx={{ mr: 0.5 }} fontSize="small" />
              Services
            </Typography>
              </Link>
          </Breadcrumbs>
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
