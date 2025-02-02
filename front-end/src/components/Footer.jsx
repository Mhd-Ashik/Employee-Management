import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p className="mb-0">
          &copy; {currentYear} All rights reserved by Govt of India
        </p>
      </div>
    </footer>
  );
};

export default Footer;