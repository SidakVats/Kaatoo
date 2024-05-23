import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// Imported CSS file 
import "../Case Studies/style.css";

// import required modules
import { Navigation } from "swiper/modules";


// Images 
import image from "../../images/underline2.svg";
import image1 from "../../images/swiper.png";
import image2 from "../../images/swiper1.png";
import image4 from "../../images/swiper2.png";
import image3 from "../../images/hero3.png";


// Components 
import Arrow from "../Arrow";

const CaseStudySwiper = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="display-4 fw-medium">Case studies</div>
        <div>
          <img src={image} alt="" className="img-fluid " />
        </div>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation]}
          className="mySwiper mt-5 "
        >
          <SwiperSlide>
            <div className="container-fluid">
              <div
                className="row rounded-5 p-2"
                style={{ border: "2px solid #ededed" }}
              >
                <div className="col-sm-6">
                  <img
                    src={image1}
                    alt="image1"
                    className="img-fluid rounded-4"
                  />
                </div>
                <div className="col-sm-6 p-5">
                  <p>
                    “Kaatoo are goal- and outcome-oriented, able to see the big
                    picture, flexible where necessary, and rigid where
                    appropriate.”
                  </p>
                  <div className="d-flex mt-5 pb-5 gap-2">
                    <img src={image3} alt="image3" className="img-fluid" />
                    <div className="mt-2">
                      <div style={{ color: "#ff6634" }}>
                        Christian Hasenfratz
                      </div>
                      CEO, Swissphone Solutions
                    </div>
                  </div>
                  <Arrow />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container-fluid">
              <div
                className="row rounded-5 p-2"
                style={{ border: "2px solid #ededed" }}
              >
                <div className="col-sm-6">
                  <img
                    src={image2}
                    alt="image1"
                    className="img-fluid rounded-4"
                  />
                </div>
                <div className="col-sm-6 p-5">
                  <p>
                    “Kaatoo are goal- and outcome-oriented, able to see the big
                    picture, flexible where necessary, and rigid where
                    appropriate.”
                  </p>
                  <div className="d-flex mt-5 pb-5 gap-2">
                    <img src={image3} alt="image3" className="img-fluid" />
                    <div className="mt-2">
                      <div style={{ color: "#ff6634" }}>Patrick Büchler</div>
                      CEO / Partner soxes AG
                    </div>
                  </div>
                  <Arrow />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container-fluid">
              <div
                className="row rounded-5 p-2"
                style={{ border: "2px solid #ededed" }}
              >
                <div className="col-sm-6">
                  <img
                    src={image4}
                    alt="image1"
                    className="img-fluid rounded-4"
                  />
                </div>
                <div className="col-sm-6 p-5">
                  <p>
                    “Kaatoo are goal- and outcome-oriented, able to see the big
                    picture, flexible where necessary, and rigid where
                    appropriate.”
                  </p>
                  <div className="d-flex mt-5 pb-5 gap-2">
                    <img src={image3} alt="image3" className="img-fluid" />
                    <div className="mt-2">
                      <div style={{ color: "#ff6634" }}>Gera Bider</div>
                      Application and Security Manager
                    </div>
                  </div>
                  <Arrow />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CaseStudySwiper;
