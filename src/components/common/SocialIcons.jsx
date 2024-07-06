import React from 'react'
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="icons">
      <div>
        <FaFacebookF size={15} id="i" />
      </div>
      <div>
        <FaLinkedin size={15} id="i" />
      </div>
      <div>
        <FaBehance size={15} id="i" />
      </div>
      <div>
        <FaInstagram size={15} id="i" />
      </div>
    </div>
  );
}

export default SocialIcons