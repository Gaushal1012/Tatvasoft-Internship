import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_div">
          <img src={Logo} alt="logo" />
          <p> &#169; 2015 Tatvasoft.com. All rights reseved </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
