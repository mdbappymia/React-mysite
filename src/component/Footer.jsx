import React from "react";
import { FaCopyright } from "react-icons/fa";
function Footer() {
  return (
    <div
      className=" py-5 text-center"
      style={{ background: "#000", color: "#FFFFFF" }}
    >
      <div className="container">
        <h3>
          Copyright <FaCopyright /> 2021
        </h3>
      </div>
    </div>
  );
}

export default Footer;
