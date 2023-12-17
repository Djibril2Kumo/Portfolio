import React from "react";
import Formations from "../Sources/Formation.json";
import { Typography } from "@mui/material";
import Style from "./Formations.module.css";

export default function FormationsPage() {
  return (
    <>
      <span className={Style.fillContainer}>
        <div className={Style.fill}>
          <Typography variant="h6">
            {" "}
            FORMATIONS
          </Typography>
        </div>
      </span>

      <div className={Style.pageContainer}>
        {Formations.map((formation) => (
          <div className={Style.container} key={formation.id}>
            <Typography variant="h6">{formation.title}</Typography>
            <Typography>{formation.annee}</Typography>
            <Typography sx={{ color: "#18fad9" }} variant="body9">
              {formation.etablissement}
            </Typography>
            <br />
            <br />
            <Typography sx={{ textAlign: "left" }}>
              {formation.description}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
}
