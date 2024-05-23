import React from "react";

// Images 
import image from "../../images/blog1.png";

const Blog1 = () => {
  return (
    <>
      <div className="container mb-5">
        <div
          className="rounded-4 p-3"
          style={{ border: "2px solid #ededed" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "2px solid #ccdcf6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "2px solid #ededed";
          }}
        >
          <div className="row">
            <div className="col-sm-6 ">
              <img src={image} alt="image1" className="img-fluid shadow-sm rounded-5" />
            </div>
            <div className="col-sm-6">
              <div className="d-flex justify-content-between">
                <div
                  className="px-3 py-1 mt-3  rounded-2 text-uppercase"
                  style={{ backgroundColor: "#f7f2ef", color: "#ff6634" }}
                >
                  expert material
                </div>
                <div className="mt-3 me-3" style={{ color: "#ccc4c4" }}>
                  <span className="me-3">May 14, 2024</span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#B4C9EB" />
                    <path
                      d="M12.8093 25.5771C12.3471 26.0038 12.3183 26.7245 12.745 27.1868C13.1718 27.649 13.8925 27.6778 14.3547 27.2511L12.8093 25.5771ZM27.5554 14.6102C27.5805 13.9816 27.0913 13.4516 26.4626 13.4265L16.2184 13.0174C15.5898 12.9923 15.0598 13.4815 15.0347 14.1102C15.0096 14.7388 15.4989 15.2688 16.1275 15.2939L25.2335 15.6576L24.8698 24.7635C24.8447 25.3921 25.3339 25.9221 25.9626 25.9472C26.5912 25.9723 27.1212 25.4831 27.1463 24.8544L27.5554 14.6102ZM14.3547 27.2511L27.1899 15.4018L25.6445 13.7278L12.8093 25.5771L14.3547 27.2511Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-10">
                      <div
                        className="fs-2 mt-5 mb-3 fw-semibold"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#ff6634";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#212529";
                        }}
                      >
                        Modernizing legacy applications: empowering small and
                        medium businesses
                      </div>
                    </div>
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

export default Blog1;
