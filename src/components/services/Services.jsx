import React from 'react'
import './services.css'
import {VscCircleFilled} from 'react-icons/vsc'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>
              Back-End Development
            </h3>
          </div>
          <ul className='service__list'>
            <li>
              
              <p>Familiarity with Spring Boot, Hibernate.</p>
            </li>
            <li>
              
              <p>Knowledge of Fullstake.</p>
            </li>
            <li>
              
              <p>Intermediate in NoSQL database like Mongodb.</p>
            </li>
            <li>
              
              <p>Microservices and Containerization like K8S,Docker.</p>
            </li>
            <li>
              
              <p>Node.Js and it's web-app framework Express.Js</p>
            </li>
            {/* <li>
              
              <p>Open-Source http server like Apache,Nginx.</p>
            </li> */}
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>
            Development
            </h3>
          </div>
          <ul className='service__list'>
            <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Full Stack Web Hosting and Integration.</p>
            </li>
            <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Full Stack Web Development.</p>
            </li>
            <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Migration and Porting to Full Stack Development.</p>
            </li>
            <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Full stack Cloud-based web Development.</p>
            </li>
            <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>API Development in Javascript and Php.</p>
            </li>
            {/* <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Full Stack Php Development</p>
            </li> */}
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>
             Devops
            </h3>
          </div>
          <ul className='service__list'>
            <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Source code management (Git/Github).</p>
            </li>
             {/* <li> 
              <VscCircleFilled className='service__list-icon'/>
              <p></p>
            </li>  */}
            {/* <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Open-source Iaas software tool(Terraform).</p>
            </li> */}
            {/* <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Software Containerization Platform(Docker).</p>
            </li>
            <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Container Orchestration optimally (Kubernetes).</p>
            </li> */}
            {/* <li>
              <VscCircleFilled className='service__list-icon'/>
              <p>Configuration Management Deployment(Ansible).</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  )
}
export default Services
