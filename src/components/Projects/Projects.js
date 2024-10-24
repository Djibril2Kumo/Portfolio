import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import projectsList from "../../projects.json";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
          Quelques projets sur lesquels j'ai travailler et continue de
          travailler.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsList.map((project, index) => (
            <Col md={4} className="project-card">
              <ProjectCard
                index={index}
                // imgPath={chatify}
                github={project.github === "true"}
                title={project.title}
                description={project.description}
                ghLink={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
