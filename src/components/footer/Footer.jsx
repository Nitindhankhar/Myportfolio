import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Nitin
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href=" ">
          <BsFacebook/>
        </a>
        <a href="">
          <AiFillInstagram/>
        </a>
        <a href="">
          <GrTwitter/>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Nitin,All rights are reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
