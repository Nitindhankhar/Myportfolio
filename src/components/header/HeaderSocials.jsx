import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nitinchoudhary07rj187647/" target="blank">
        <BsLinkedin/>
      </a>
      <a href="https://github.com/Nitindhankhar" target="blank">
        <FaGithub/>
      </a>
      <a href="" target="blank">
        <SiDiscord/>
      </a>
    </div>
  );
};

export default HeaderSocials;
