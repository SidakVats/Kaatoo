import React from "react";

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
                  <button
                    className="btn rounded-4 px-4 mt-4"
                    style={{ color: "#84adf3", backgroundColor: "#fffdfd" }}
                  >
                    Get in touch
                  </button>
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
