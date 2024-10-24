import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Djibril SAMASSA,</span>
            habitant <span className="purple"> à Paris</span>
            <br />
            Je suis actuellement étudiant en <span className="purple">Master Lead Dev</span> à l'Ecole Européenne des métiers de l'internet.
            <br />
            J'ai obtenue un bachelor web development dans la même école ainsi qu'un diplôme de chef de projet digitaux.
            <br />
            <br />
           En dehors de coder, les activités que j'aime pratiquer sont:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> La cuisine
            </li>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Le sport (Jiu Jitsu Brésilien)
            </li>
          </ul>
          <br/>
          <p style={{ textAlign: "justify" }}>
            Ma citation préférée:  <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ils ne savaient pas que c'était impossible, alors ils l'ont fait."{" "}
          </p>
          <footer className="blockquote-footer">Marc Twain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
