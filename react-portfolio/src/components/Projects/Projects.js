import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import './index.scss';
import Kissmet from "../../assets/project-images/kissmet.png"
import ohshoot from "../../assets/project-images/oh-shoot.gif"
import erdene from "../../assets/project-images/erdene.png"
import filmpire from "../../assets/project-images/filmpire.png"
import santorini from "../../assets/project-images/santorini.png"
import mvcblog from "../../assets/project-images/mvc-tech-blog.png"

const Projects = () => {
    return(
        <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="pink">Works </strong>
          </h1>
          <Row className = "allProjects">
            <Col md={1} className="project-card">
              <ProjectCard
                imgPath={Kissmet}
                isBlog={false}
                title="Kissmet"
                description="Friend-meeting platform which allows user for realtime messaging, image sharing as well as supports reactions on messages. Built using MERN."
                ghLink="https://github.com/ckavanattu/KissMet-"
                demoLink="https://boiling-tor-64905.herokuapp.com/"
              />
            </Col>
  
            <Col md={1} className="project-card">
              <ProjectCard
                imgPath={ohshoot}
                isBlog={false}
                title="oh-Shoot!"
                description="A website featuring a blobfish and a cow in this space invaders archetype game. From keeping track of your highest scores to community chat interactions with like-minded gamers, this website has it all!"
                ghLink="https://github.com/CannibalClarence/oh-SHOOT"
                demoLink="https://ohshoot.herokuapp.com/"
              />
            </Col>
  
            <Col md={1} className="project-card">
              <ProjectCard
                imgPath={erdene}
                isBlog={false}
                title="Erdene"
                description="Designed and created custom website for a mining company using Figma design software"
                ghLink="https://github.com/AnukaZan/e-commerce-backend"
                demoLink="https://erdene.com/"              
              />
            </Col>
          </Row>
          <Row className = "allProjects">
            <Col md={1} className="project-card">
              <ProjectCard
                imgPath={santorini}
                isBlog={false}
                title="Santorini"
                description="Designed a restaurant website for owner of Santorini to attract new customers and retain current customers."
                ghLink="https://github.com/AnukaZan/u-develop-it"
                demoLink="https://www.figma.com/proto/XiMFYJWVM1v9Gqt7QtbeeD/Santorini-Greek-Island-Final-Prototype?page-id=174%3A943&node-id=182%3A1138&viewport=241%2C48%2C0.02&scaling=scale-down&starting-point-node-id=182%3A1138"
              />
            </Col>
  
            <Col md={1} className="project-card">
              <ProjectCard
                imgPath={filmpire}
                isBlog={false}
                title="Filmpire"
                description="Extensive film database with streaming links and recommendations to similar movies based on selection."
                ghLink="https://github.com/ckavanattu/Module-7-Group-Project"
                demoLink="https://ckavanattu.github.io/Module-7-Group-Project/" 
              />
            </Col>
  
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={mvcblog}
                isBlog={false}
                title="MVC Tech Blog"
                description="Built completely from scratch and deployed it to Heroku. Follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."
                ghLink="https://github.com/AnukaZan/mvc-tech-blog"
                demoLink="https://protected-journey-29022.herokuapp.com/"  
              />
            </Col>
          </Row>
        </Container>
      </Container>
    )
}

export default Projects;