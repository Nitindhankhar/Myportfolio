import React from "react";
import "./about.css";
import ME from "../../image/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdRuleFolder } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icon" />
              <h5>Experience of learning</h5>
              <small>1 Year</small>
            </article>
            {/* <article className="about__card">
              
              <h5></h5>
              <small>5+</small>
            </article> */}
            <article className="about__card">
            <MdRuleFolder className="about__icon" />
              <h5>Number Of Projects</h5>
              <small>5+</small>
            </article>
          </div>
          <p>
            I wish to contribute my technical and creative skills in your
            organization and establish a career for myself. Assist in
            accomplishing production with high quality and maximum efficiency. I
            am seeking an important position in your organization that can
            provide me with a chance to enhance my skills and achieve my goals.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
