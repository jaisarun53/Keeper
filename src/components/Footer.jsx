import React from "react";
import "../App.css";

const years = new Date().getFullYear();

const Footer = () => {
  return <footer>copyright @ {years}</footer>;
};

export default Footer;
