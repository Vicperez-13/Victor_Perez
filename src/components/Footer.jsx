import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Victor Morales Perez. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
