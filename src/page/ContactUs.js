import React, { useEffect } from "react";
import CommonHeading from "../components/common/CommonHeading";
import SocialIcons from "../components/common/SocialIcons";

function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us | Codebase";
  });
  return (
    <div className="contactUs">
      <div className="container">
        <div className="contact">
          <CommonHeading titlename="Contact Us" />
          <div className="form">
            <div className="item1">
              <label>Name</label>
              <input />
            </div>
            <div className="item2">
              <label>Email</label>
              <input />
            </div>
            <div className="item3">
              <label>Phone Number</label>
              <input />
            </div>
            <div className="item4">
              <label>Your Message</label>
              <textarea />
            </div>
          </div>
          <div className="formbtn">
            <button>SEND MESSAGE</button>
          </div>
          <iframe
            class="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameborder="0"
            style={{ minHeight: "450px", width: "100%", border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="con-ways">
          <div>
            <p>
              Give us a call or drop by anytime, we endea vour to answer all
              enquiries within 24 hours on all days. We will be happy to answer
              your questions
            </p>
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
          <div>
            <h6>Follow us</h6>
            <SocialIcons/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
