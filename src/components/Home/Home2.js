import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Je me <span className="purple"> présente </span>
            </h1>
            <p className="home-about-body">
              J'ai découvert la programmation lors d'une initiation à 18 ans, et
              de fil en aiguille je me suis pris de passion pour le
              développement web.
              <br />
              <br />
              Je suis bon dans les classique comme
              <i>
                <b className="purple"> Javascript Pyhton et PHP. </b>
              </i>
              <br />
              <br />
              Ma plus grande appétence est &nbsp;
              <i>
                <b className="purple">La création d'interface utilisateur </b>{" "}
                et la création de fonctionnalité{" "}
              </i>
              <br />
              <br />
              Quand c'est possible j'essaye aussi de m'améliorer en{" "}
              <b className="purple">React Native</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouvez moi</h1>
            <p>
              <span className="purple">Joignez moi </span>sur
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Djibril2Kumo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/djibril-samassa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
