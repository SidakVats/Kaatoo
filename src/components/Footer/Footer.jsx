import React from "react";
import image from "../../images/logo.png";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Custom software development",
    "Software reengineering",
    "Software maintenance",
    "DevOps services and solutions",
    "Mobile development services",
    "IT outsourcing service",
    "AI development services",
  ];

  const expertise = [
    "Legacy system modernization",
    "Cloud applications development",
    "Enterprise application development",
    "Identity access management (IAM)",
  ];

  const caseStudies = ["Swissphone", "Soxes", "Conrad", "Eliat", "Prylada"];

  const technologies = [
    ".NET, C#",
    "Java, Kotlin",
    "JavaScript/TypeScript",
    "Python",
    "Kubernetes, Docker",
    "Azure, AWS, GCP",
    "MS SQL, MySQL, PostgreSQL, MongoDB, Redis",
    "PHP",
    "Delphi",
    "C++, C",
    "VBA, Microsoft Access",
  ];

  return (
    <div
      className="container-fluid mt-5 pt-5 pb-5"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img src={image} alt="Logo" className="img-fluid mt-3" />

            <div className="fs-5 mt-5" style={{ color: "#557ab6" }}>
              contactme@gmail.com
            </div>
            <div className="fs-5 mb-5" style={{ color: "#557ab6" }}>
              +48 8847129686
            </div>

            <p className="fs-5 fw-medium pt-5" style={{ color: "#557ab6" }}>
              LOCATION
            </p>
            <div>Head office: 3,9817 - 44 Avenue NW</div>
            <div>EDMONTON ALBERTA T6E 5E3</div>
            <div className="mt-3">
              LICENCE NUMBER :{" "}
              <span className="fw-semibold">498666132-001</span>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="fs-5 mt-3">
              <a
                href="/services"
                style={{ color: "#557ab6", textDecoration: "none" }}
              >
                SERVICES
              </a>
            </div>
            <div
              className="fs-5 mt-3 mb-3 "
              style={{ textDecoration: "underline" }}
            >
              Core Software Services
            </div>
            {services.map((service, index) => (
              <div key={index} className="hover-effect">
                {service}
              </div>
            ))}
            <div
              className="fs-5 mt-3 mb-3 "
              style={{ textDecoration: "underline" }}
            >
              Core areas of expertise
            </div>
            {expertise.map((area, index) => (
              <div key={index} className="hover-effect">
                {area}
              </div>
            ))}
          </div>
          <div className="col-sm-2">
            <div className="fs-5 mb-3 mt-3 " style={{ color: "#557ab6" }}>
              CASE STUDIES
            </div>
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="hover-effect">
                {caseStudy}
              </div>
            ))}
            <div className="mt-3">
              <a
                href="#"
                className="hover-effect"
                style={{ textDecoration: "none" }}
              >
                View All
              </a>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="fs-5 mb-3 mt-3" style={{ color: "#557ab6" }}>
              COMPANY
            </div>
            <div>
              <a
                href="/about"
                style={{ textDecoration: "none" }}
                className="hover-effect"
              >
                About us
              </a>
            </div>
            {/* <div className="hover-effect">Careers</div>
            <div className="hover-effect">Blog</div>
            <div className="hover-effect">News</div> */}
            <div>
              <a
                href="/contact"
                style={{ textDecoration: "none" }}
                className="hover-effect"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="fs-5 mb-3 mt-3" style={{ color: "#c4c4c4" }}>
              TECHNOLOGIES
            </div>
            {technologies.map((technology, index) => (
              <div key={index}>{technology}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <hr />
        <div className="d-flex justify-content-between">
          <div>© Copyright {currentYear} Kaatoo</div>
          <div>
            {" "}
            <a
              href="/privacypolicy"
              style={{ color: "black", textDecoration: "none" }}
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
