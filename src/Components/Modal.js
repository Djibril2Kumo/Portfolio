import React from "react";
import Style from "./Modal.module.css";
import { Fade } from "react-awesome-reveal";
import { Divider } from "@mui/material";
// import LDM from "./SAMASSA_DJIBRIL_CV.pdf"

export default function Modal() {
  return (
    <Fade direction="down" duration={1000}>
      <div className={Style.mainContainer}>
        <div style={{ padding: "0.5em", backgroundColor: "#18fad9" }}></div>

        <span className={Style.container}>
          {/* pt1 */}
          <div className={Style.pt1}>
            <span>
              <span>
                <h1>
                  Djibril <br />
                  SAMASSA
                </h1>
                <Divider className={Style.line} />
              </span>
              <span className={Style.LinkBar}>
                <a href="">Github</a>
                <Divider className={Style.line2} />
                <a href="/">Linkedin</a>
                <Divider className={Style.line2} />
                <a
                  download={"SAMASSA_DJIBRIL_CV"}
                  href="SAMASSA_DJIBRIL_CV.pdf"
                >
                  CV
                </a>
                <Divider className={Style.line2} />
                <a
                  download={"SAMASSA_DJIBRIL_LETTRE"}
                  href="SAMASSA_DJIBRIL_LDM.pdf"
                >
                  Lettre de motivation
                </a>
              </span>
              <button
                style={{ letterSpacing: "1.2px" }}
                className={Style.customButton}
              >
                Découvrir mon profil
              </button>
            </span>
          </div>

          {/* pt2 */}
          <div className={Style.pt2}>
            <img
              src="avatar.png"
              alt="Avatar de personne caucasienne"
              className={Style.avatar}
            />
          </div>

          {/* pt3 */}
          <div className={Style.pt3}>
            <h5
              className={Style.strechedText}
              style={{
                color: "#18fad9",
                textTransform: "uppercase",
              }}
            >
              Présentation
            </h5>
            <h3
              className={Style.intro}
              style={{
                letterSpacing: "1px",
              }}
            >
              Développeur Fullstack, <br />
              React JS / Node JS, <br />
              sensible à l &apos; ux / ui et à l &apos; accéssibilité
            </h3>
            <p
              style={{
                letterSpacing: "1px",
                marginTop: "10px",
                maxWidth: "80%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis massa vitae ex pulvinar rhoncus ut ut lacus. Praesent
              suscipit arcu eu gravida pellentesque. Phasellus eu dictum turpis.
            </p>
          </div>
        </span>
        <div style={{ padding: "0.5em", backgroundColor: "#18fad9" }}></div>
      </div>
    </Fade>
  );
}
