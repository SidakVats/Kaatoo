import React, { useState } from "react";

// Imported Component
import Arrow from "../Arrow";

import "./Experties.css";

// Imported Images
import image from "../../images/underline1.svg";
import image1 from "../../images/expertise1.png";
import image2 from "../../images/expertise2.png";
import image3 from "../../images/expertise3.png";
import image4 from "../../images/expertise4.png";
import image5 from "../../images/expertise5.png";
import image6 from "../../images/expertise6.png";

const Experties = () => {
  const expertiseData = [
    {
      label: "50+ projects implemented",
      text: "Legacy system modernization",
      description:
        "We helped 50+ companies optimize their work by migrating the systems in use to the latest technologies. While upgrading and stabilizing a software, we thoroughly analyze the key business and technical problems to add maximum value to the current solution. We pay much attention to the speed and security issues, as well as keep the system working during the whole process of migration.",
    },
    {
      label: "90+ projects implemented",
      text: "Enterprise software development",
      description:
        "We helped 100+ companies optimize their work by migrating the systems in use to the latest technologies. While upgrading and stabilizing a software, we thoroughly analyze the key business and technical problems to add maximum value to the current solution. We pay much attention to the speed and security issues, as well as keep the system working during the whole process of migration.",
    },
    {
      label: "50+ projects implemented",
      text: "Cloud application development",
      description:
        "We helped 50+ companies optimize their work by migrating the systems in use to the latest technologies. While upgrading and stabilizing a software, we thoroughly analyze the key business and technical problems to add maximum value to the current solution. We pay much attention to the speed and security issues, as well as keep the system working during the whole process of migration.",
    },
    {
      label: "40+ projects implemented",
      text: "Architecture design for complex systems",
      description:
        "We helped 40+ companies optimize their work by migrating the systems in use to the latest technologies. While upgrading and stabilizing a software, we thoroughly analyze the key business and technical problems to add maximum value to the current solution. We pay much attention to the speed and security issues, as well as keep the system working during the whole process of migration.",
    },
    {
      label: "20+ projects implemented",
      text: "Authentication and authorization solutions",
      description:
        "We helped 20+ companies optimize their work by migrating the systems in use to the latest technologies. While upgrading and stabilizing a software, we thoroughly analyze the key business and technical problems to add maximum value to the current solution. We pay much attention to the speed and security issues, as well as keep the system working during the whole process of migration.",
    },
    {
      label: "30+ projects implemented",
      text: "Solutions for startups",
      description:
        "We helped 30+ companies optimize their work by migrating the systems in use to the latest technologies. While upgrading and stabilizing a software, we thoroughly analyze the key business and technical problems to add maximum value to the current solution. We pay much attention to the speed and security issues, as well as keep the system working during the whole process of migration.",
    },
  ];

  // Create an array of images
  const images = [image1, image2, image3, image4, image5, image6];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="fs-1">Key areas of expertise</div>
        <img
          src={image}
          alt=""
          className="img-fluid"
          
        />
        <div className="row">
          {expertiseData
            .slice(0, showAll ? expertiseData.length : 3)
            .map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4 mt-5" key={index}>
                <div
                  className="px-3 py-3 rounded-5"
                  style={{ border: "2px solid #ededed" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = "2px solid #ccdcf6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = "2px solid #ededed";
                  }}
                >
                  <div className="container container1">
                    <div className="row">
                      <div className="col-sm-12">
                        {/* Use images from the images array */}
                        <img
                          src={images[index]}
                          alt="images"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text-end mt-4 div1">
                        <mark
                          className="py-2 px-3 rounded-3"
                          style={{ backgroundColor: "#ececec" }}
                        >
                          {item.label}
                        </mark>
                      </div>
                    </div>
                  </div>

                  <div
                    className="fs-2"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#f0734a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "black";
                    }}
                  >
                    {item.text === "Solutions for startups" ? (
                      <>
                        Solutions for
                        <br />
                        startups
                      </>
                    ) : (
                      item.text
                    )}
                  </div>

                  <div className="mt-3 mb-5">{item.description}</div>
                  <Arrow />
                </div>
              </div>
            ))}
        </div>
        <center>
          <button
            className="btn btn-outline-dark rounded-4 mt-5 px-5 py-2 fs-5"
            onClick={toggleShowAll}
          >
            {showAll ? "Hide Areas" : "View more (6 areas)"}
          </button>
        </center>
      </div>
    </>
  );
};

export default Experties;
