import React from "react";

const Contact = () => {
  return (
    <>
      <div style={{padding:"120px"}}>
      <nav aria-label="breadcrumb" style={{cursor:"pointer"}}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-5">
            <a href="/" style={{textDecoration:"none", color:"black"}}>Home</a>
          </li>
          <li className="breadcrumb-item fs-5 active" aria-current="page">
          <a href="/contact" style={{textDecoration:"none", color:"#ff6634"}}>Contact</a>
          </li>
        </ol>
      </nav>
      </div>

      <div className="container-fluid" style={{borderBottom:"1px solid #ededed"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
                <div className="display-1 fw-medium">CONTACT US</div>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
