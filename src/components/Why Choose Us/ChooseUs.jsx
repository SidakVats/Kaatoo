import React from "react";
import image1 from "../../images/chooseus1.png";
import image2 from "../../images/chooseus2.png";
import image3 from "../../images/chooseus3.png";

const sections = [
  {
    image: image1,
    title: "Credibility",
    description: "Kaatoo is a truly reliable partner who works inclusively and seamlessly integrates with the customers’ team."
  },
  {
    image: image2,
    title: "Proficiency",
    description: "We provide rare, deep expertise in software reengineering and digitalization, making Kaatoo experts a valuable addition to your team."
  },
  {
    image: image3,
    title: "Focus on value",
    description: "We help our clients gain tangible benefits from their solutions, allocating engineering resources for optimal outcomes."
  }
];

const ChooseUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="display-4 fw-medium mt-5 mb-3">Clients select us for</div>
          {sections.map((section, index) => (
            <div className="col-sm-4 mt-4" key={index}>
              <div className="mt-3 text-capatalized fs-2 fw-semibold mb-2">{section.title}</div>
              {index === 1 ? (
                <>
                  <div className="fs-5">{section.description}</div>
                  <img src={section.image} alt={`image${index}`} className="img-fluid mt-3" />
                </>
              ) : (
                <>
                  <img src={section.image} alt={`image${index}`} className="img-fluid" />
                  <div className="fs-5 mt-3">{section.description}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
