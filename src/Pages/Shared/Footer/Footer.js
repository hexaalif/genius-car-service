import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center my-5">
      <p>
        <small>
          copyright &copy; reserved
          {year}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
