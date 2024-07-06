import React from "react";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <div>
            <h6>Follow us</h6>
            <SocialIcons/>
          </div>
          <div>
            <h6>Address</h6>
            <p>
              Unit No: 4244 DMCC Business Centre Level No 1 Jewellery & Gemplex
              3 Dubai, United Arab Emirates & Egypt
            </p>
          </div>
          <div>
            <h6>Phone</h6>
            <p>+971505304896</p>
          </div>
          <div>
            <h6>Email</h6>
            <p>info@codebase-tech.com</p>
          </div>
        </div>
        <span>Copyright &copy; 2024 Fouda</span>
      </div>
    </div>
  );
}

export default Footer;
