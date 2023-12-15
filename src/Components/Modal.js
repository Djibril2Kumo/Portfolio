import React, { useState } from "react";
import Style from "./Modal.module.css";
import { Fade } from "react-awesome-reveal";
import { Divider, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Modal({disableModal}) {
  console.log(disableModal)
  const [anime, setanime] = useState(false);
  const handleAnimate = () => {
    setanime(true)
    setTimeout(()=>{
      disableModal()
      setanime(false)
    },[1000])
  }
  return (
    <Fade className={anime ? Style.toTop : null} direction={'down'} duration={700}>
      <div className={`${Style.mainContainer} ${anime ? Style.toTop : ''}`}>
        <div style={{ padding: "0.5em", backgroundColor: "#18fad9" }}></div>

        <span className={Style.container}>
          {/* pt1 */}
          <div className={Style.pt1}>
            <span>
              <span>
                <Typography variant="h3">
                  Djibril <br />
                  SAMASSA
                </Typography>
                <Divider className={Style.line} />
              </span>
              <span className={Style.LinkBar}>
                <a href="">
                  <Typography variant="h5">Github</Typography>
                </a>
                <Divider className={Style.line2} />
                <a href="/">
                  <Typography variant="h5">Linkedin</Typography>
                </a>
                <Divider className={Style.line2} />
                <a
                  download={"SAMASSA_DJIBRIL_CV"}
                  href="SAMASSA_DJIBRIL_CV.pdf"
                >
                  <Typography variant="h5">CV</Typography>
                </a>
                <Divider className={Style.line2} />
                <a
                  download={"SAMASSA_DJIBRIL_LETTRE"}
                  href="SAMASSA_DJIBRIL_LDM.pdf"
                >
                  <Typography variant="h5">Lettre de motivation</Typography>
                </a>
              </span>
              <button
                onClick={() => {
                  handleAnimate();
                }}
                style={{ letterSpacing: "1.2px" }}
                className={ Style.customButton}
              >
                <h3>Découvrir mon profil</h3>
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
            <Typography variant="h6"
              className={Style.strechedText}
              style={{
                color: "#18fad9",
                textTransform: "uppercase",
              }}
            >
              Présentation
            </Typography>
            <Typography variant="h5"
              className={Style.intro}
              style={{
                letterSpacing: "1px",
              }}
            >
              Développeur Fullstack, <br />
              React JS / Node JS, <br />
              sensible à l &apos; ux / ui et à l &apos; accéssibilité
            </Typography>
            <Typography
              style={{
                letterSpacing: "1px",
                marginTop: "10px",
                maxWidth: "80%",
              }}
            >
              Développeur Fullstack React JS et Node JS fort d&apos;une
              expertise technique solide, je m&apos;efforce de créer des
              expériences et interfaces utilisateur agréables. Ma passion pour
              le développement et ma capacité à résoudre efficacement les défis
              techniques font de moi un atout pour tout projet de développement
              web.
              <br />
              <br />
              Djibril, prêt à contribuer à des projets ambitieux et à apporter
              mes compétences à votre équipe.
            </Typography>
          </div>
        </span>
        <div style={{ padding: "0.5em", backgroundColor: "#18fad9" }}></div>
      </div>
    </Fade>
  );
}
