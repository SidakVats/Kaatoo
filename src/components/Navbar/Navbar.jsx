import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated to use useNavigate

// CSS File 
import "./Navbar.css";

// Images 
import image from "../../images/logo.png";
import image11 from "../../images/navDropOne1.png";
import image1 from "../../images/navDropOne2.png";
import image2 from "../../images/navDropOne3.svg";
import image3 from "../../images/navDropOne4.svg";
import image4 from "../../images/navDropOne5.png";
import image5 from "../../images/navDropOne6.svg";
import image6 from "../../images/navDropOne7.svg";
import image7 from "../../images/navDropOne8.png";
import image8 from "../../images/navDropOne9.png";
import image9 from "../../images/navDropOne10.png";
import image10 from "../../images/navDropOne11.svg";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const navigate = useNavigate(); // Updated to use useNavigate

  const handleMegaMenuToggle = (e) => {
    e.preventDefault(); // Prevent the default anchor click behavior
    setIsMegaMenuOpen((prevState) => !prevState);
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  const handleMouseEnter = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMegaMenuOpen(false);
  };

  const handleNavLinkClick = (e, link) => {
    if (!isMegaMenuOpen) {
      navigate(link);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-white border-bottom fixed-top shadow-sm"
        style={{ height: "100px" }}
      >
        <div className="container d-flex justify-content-between">
          {/* <a className="navbar-brand" href="/"> */}
            <img src={image} alt="logo" className="img-fluid" />
          {/* </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <a href="/"><img src={image} alt="logo" className="img-fluid" /></a>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={closeMegaMenu}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-evenly fs-4 text-uppercase flex-grow-1 pe-3">
              <li className="nav-item fw-semibold">
                  <a className="nav-link hover1" href="/">
                    Home
                  </a>
                </li>
                <li 
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className="nav-link hover1 fw-semibold"
                    href="/services"
                    aria-expanded={isMegaMenuOpen ? "true" : "false"}
                    onClick={(e) => handleNavLinkClick(e, '/services')}
                  >
                    Services
                  </a>
                  <div
                    className={`dropdown-menu mega-menu ${isMegaMenuOpen ? 'show' : ''}`}
                    aria-labelledby="servicesDropdown"
                  >
                    <div className="mega-menu-content">
                      <div className="column">
                        <h6>Core software services</h6>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image11} alt="image" className="img-fluid" />
                          Custom software development
                        </a>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image1} alt="image" className="img-fluid" />
                          Software reengineering
                        </a>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image2} alt="image" className="img-fluid" />
                          DevOps services and solutions
                        </a>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image3} alt="image" className="img-fluid" />
                          Mobile development services
                        </a>
                      </div>
                      <div className="column divider">
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image4} alt="image" className="img-fluid" />
                          IT outsourcing
                        </a>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image5} alt="image" className="img-fluid" />
                          AI development
                        </a>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image6} alt="image" className="img-fluid" />
                          Software maintenance
                        </a>
                      </div>
                      <div className="column">
                        <h6>Core areas of expertise</h6>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image7} alt="image" className="img-fluid" />
                          Legacy system modernization
                        </a>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image8} alt="image" className="img-fluid" />
                          Cloud application development
                        </a>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image9} alt="image" className="img-fluid" />
                          Enterprise systems development
                        </a>
                        <a className="dropdown-item d-flex" href="#" onClick={closeMegaMenu}>
                          <img src={image10} alt="image" className="img-fluid" />
                          Identity and access management
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item fw-semibold">
                  <a className="nav-link hover1" href="/about">
                    About Us
                  </a>
                </li>
                
              </ul>
              <a href="/contact">
              <button
                className="btn rounded-4 text-white fs-5 fw-semibold text-capitalize px-5 py-2 button1"
                style={{ backgroundColor: "#f0734a" }}
              >
                Contact Us
              </button></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
