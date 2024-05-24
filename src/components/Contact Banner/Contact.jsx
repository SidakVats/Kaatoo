import React from "react";
import Button from "@mui/material/Button";
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from "@mui/material/Fab";

const Contact = () => {
  return (
    <>
      <div className="container mt-5 pt-5 mb-5">
        <div className="rounded-4 p-2" style={{ backgroundColor: "#7a9cd2" }}>
          <div className="row">
            <div className="col-sm-6">
              <img
                src="https://assets-global.website-files.com/6436ca62cf301e4da7d938f6/653face6ad95abddab789806_cta.webp"
                alt="image1"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6">
              <div className="p-4">
                <p className="fs-2 text-white fw-medium">
                  Talk to us–your engineering potential is higher than you think
                </p>
                <a href="/contact">
                <Fab variant="extended">
                  <NavigationIcon sx={{ mr: 1, color:"#7a9cd2" }} />
                  <span style={{color:"#7a9cd2", fontSize:"17px"}}>Contact Us</span>
                </Fab>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
