import React from "react";
import "./experience.css";
import { GrReactjs } from "react-icons/gr";
import { FaBootstrap, FaCss3, FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { IoLogoAngular } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpressvpn } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <GrReactjs className="experience__details-icon" />
              <div>
                <h4>React.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <FaCss3 className="experience__details-icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <FaPhp className="experience__details-icon " />
              <div>
                <h4>Php</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <FaBootstrap className="experience__details-icon " />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <DiHtml5 className="experience__details-icon " />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <IoLogoAngular className="experience__details-icon" />
              <div>
                <h4>Angular.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <IoLogoNodejs className="experience__details-icon " />
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <SiExpressvpn className="experience__details-icon " />
              <div>
                <h4>Express.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              
              {/* <div>
                {" "}
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details"> */}
               <SiMysql className="experience__details-icon " />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              
              {/* <div>
                {" "}
                <h4>SQLite</h4>
                <small className="text-light">Intermediate</small>
              </div> */}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
