import React from "react";
import Style from "./Modal.module.css";
import { Fade } from "react-awesome-reveal";
import { Divider, Typography } from "@mui/material";

export default function Modal() {
  return (
    <Fade direction="down" duration={1200}>
      <div className={Style.container}>
        {/* pt1 */}

        <div className={Style.pt1}>
          <span>
            <span >
              <Typography variant="h3">
                Djibril <br />
                SAMASSA
              </Typography>
              <Divider className={Style.line} />
            </span>
            <span className={Style.LinkBar}>
              <li>Github</li>
              <Divider className={Style.line2} />
              <li>Linkedin</li>
            </span>
            <button className={Style.customButton}>Voir plus</button>
          </span>
        </div>

        {/* pt2 */}
        <div className={Style.pt2}>
            <img src="avatar.png" alt="Avatar de personne caucasienne" className={Style.avatar}/>
        </div>

        {/* pt3 */}
        <div className={Style.pt3}></div>
      </div>
    </Fade>
  );
}
