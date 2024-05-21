import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const TechStack = () => {
  const [showAll, setShowAll] = useState(false);

  const technologies = [
    { href: "tech1.png", name: ".NET" },
    { href: "tech2.png", name: "C#" },
    { href: "tech3.png", name: "Java" },
    { href: "tech4.png", name: "Kotlin" },
    { href: "tech5.png", name: "JavaScript" },
    { href: "tech6.png", name: "TypeScript" },
    { href: "tech7.png", name: "Python" },
    { href: "tech8.png", name: "Delphi" },
    { href: "tech9.png", name: "C++" },
    { href: "tech10.png", name: "PHP" },
    { href: "tech11.png", name: "VBA" },
    { href: "tech12.png", name: "My SQL" },
    { href: "tech23.png", name: "React", className: "ms-3" },
    { href: "tech13.png", name: "MS SQL" },
    { href: "tech14.png", name: "MongoDB" },
    { href: "tech15.png", name: "Redis" },
    { href: "tech16.png", name: "MS Access" },
    { href: "tech17.png", name: "Azure" },
    { href: "tech18.png", name: "GCP", className: "ms-4" },
    { href: "tech19.png", name: "AWS", className: "ms-4" },
    { href: "tech20.png", name: "Kubernetes" },
    { href: "tech21.png", name: "PostgreSQL" },
    { href: "tech22.png", name: "Docker" },
    { href: "tech24.png", name: "Angular", className: "ms-3" },
  ];

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
    
  };

  const TechItem = ({ href, name, className }) => (
    <div className="col-3 col-md-2 col-lg-1">
      <img src={`../src/images/${href}`} alt={name} className="img-fluid" />
      <div className={`mt-2 mb-5 ${className || ""}`} style={{ color: "#5c5c5c" }}>
        {name}
      </div>
    </div>
    
  );

  return (
    <>
      <div className="container">
        <p className="display-3 fw-medium mt-5 pt-5">Technologies</p>
        <div className="row text-center mt-5 mb-5">
          {technologies.slice(0, 12).map((tech, index) => (
            <TechItem key={index} href={tech.href} name={tech.name} className={tech.className} />
          ))}
          {showAll &&
            technologies.slice(12).map((tech, index) => (
              <TechItem key={index + 12} href={tech.href} name={tech.name} className={tech.className} />
            ))}
        </div>
      </div>

      <center>
        <button className="btn btn-outline-dark rounded-4 px-5 py-2 fs-5" onClick={toggleShowAll}>
          {showAll ? "Hide Technologies" : "View more (24 Technologies)"}
        </button>
      </center>
    </>
  );
};

export default TechStack;
