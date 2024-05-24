import React from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

import RecentActorsIcon from "@mui/icons-material/RecentActors";

import SecurityIcon from "@mui/icons-material/Security";

import image from "../images/underline1.1.svg";

const PrivacyPolicy = () => {

    const headingStyle = {
        color: '#f0734a',
        fontSize: '1.25rem' // Adjusted font size
      };

    
  return (
    <>
      <div className="container">
        <div style={{ paddingTop: "120px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/contact"
            >
              <RecentActorsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Contact
            </Link>
            <Link
              href="/privacypolicy"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="#f0734a"
              >
                <SecurityIcon sx={{ mr: 0.5 }} fontSize="small" />
                Privacy Policy
              </Typography>
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <div
        className="container-fluid mt-5 pt-5"
        style={{ borderBottom: "2px solid #ededed" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-5">
              <div className="display-2 fw-medium">Privacy Policy</div>
              <img src={image} alt="svg" className="img-fluid mt-2" />
            </div>
            <div
              className="col-sm-6 mb-5 p-3 rounded-4"
              style={{ border: "2px solid #ededed" }}
            >
              <div
                className="fs-5 d-flex justify-content-between"
                style={{ color: "#f0734a" }}
              >
                Your Privacy, Our Priority{" "}
                <span style={{ fontSize: "18px", color: "#666666" }}>
                  Last updated May 22, 2024
                </span>
              </div>

              <div>
                At Kaatoo-Tech Enterprises Limited, your privacy is our top
                priority. We are dedicated to protecting your personal
                information with cutting-edge security and transparent
                practices. Trust us to handle your data with the care and
                respect it deserves. Welcome to a partnership built on security
                and integrity.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
      <h2 className="text-center mb-3" style={{textDecoration:"underline"}}>Your Data, Our Commitment: Privacy and Protection You Can Trust</h2>
      <h2 className="text-center mb-5">Kaatoo-Tech Enterprises Limited</h2>
      {/* <p className="text-center"><em>Effective Date: [Insert Effective Date]</em></p> */}

      <p><strong>Your Privacy, Our Priority</strong></p>
      <p>At Kaatoo-Tech Enterprises Limited, your privacy is our top priority. We are dedicated to protecting your personal information with cutting-edge security and transparent practices. Trust us to handle your data with the care and respect it deserves. Welcome to a partnership built on security and integrity.</p>

      <div className="mt-4">
        <h3 style={headingStyle}>1. What Information We Collect</h3>
        <ul>
          <li><strong>Personal Information:</strong> Your name, email address, phone number, job title, and company name.</li>
          <li><strong>Technical Information:</strong> Your IP address, browser type, operating system, and other details about how you use our website.</li>
          <li><strong>Usage Information:</strong> Information about the pages you visit and how long you spend on them.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 style={headingStyle}>2. How We Use Your Information</h3>
        <ul>
          <li><strong>To Provide Services:</strong> This includes custom software development, enterprise systems development, cloud application development, DevOps services, software maintenance, IT consulting, and software development for small and medium companies.</li>
          <li><strong>To Communicate:</strong> We respond to your questions and provide customer support.</li>
          <li><strong>To Improve Services:</strong> We analyze usage data to enhance our services and develop new ones.</li>
          <li><strong>To Market:</strong> We may send you updates and offers about our services, but you can opt out at any time.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 style={headingStyle}>3. Sharing Your Information</h3>
        <ul>
          <li><strong>With Service Providers:</strong> We may share your information with trusted partners who help us provide our services.</li>
          <li><strong>For Legal Reasons:</strong> If required by law, we may share your information with authorities.</li>
          <li><strong>Business Changes:</strong> If we undergo a merger or sale, your information may be part of the transfer.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 style={headingStyle}>4. How We Protect Your Information</h3>
        <p>We use various security measures to protect your information, including encryption and secure storage. However, no system is completely secure, and we cannot guarantee absolute security.</p>
      </div>

      <div className="mt-4">
        <h3 style={headingStyle}>5. Your Rights</h3>
        <p>You have rights regarding your information:</p>
        <ul>
          <li><strong>Access:</strong> You can request a copy of the information we hold about you.</li>
          <li><strong>Correction:</strong> You can ask us to correct any inaccurate information.</li>
          <li><strong>Deletion:</strong> You can request that we delete your information, with some exceptions.</li>
          <li><strong>Objection:</strong> You can object to how we use your information.</li>
        </ul>
        <p>To exercise these rights, contact us using the details below.</p>
      </div>

      <div className="mt-4">
        <h3 style={headingStyle}>6. International Transfers</h3>
        <p>We are based in Canada, but sometimes your information might be transferred to other countries. We ensure these transfers comply with data protection laws.</p>
      </div>

      <div className="mt-4">
        <h3 style={headingStyle}>7. Changes to This Policy</h3>
        <p>We may update this policy occasionally. We will post any changes on our website, so please check back regularly.</p>
      </div>

      <div className="mt-4">
        <h3 style={headingStyle}>8. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <address>
          Kaatoo-Tech Enterprises Limited<br />
          [Insert Address]<br />
          Email: <a href="mailto:[Insert Email Address]">contactme@gmail.com</a><br />
          Phone: <a href="tel:[Insert Phone Number]">+48 8847129686</a><br />
          Licence Number: <span className="fw-medium">498666132-001</span>
        </address>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
