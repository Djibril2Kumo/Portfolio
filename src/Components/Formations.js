import React from "react";
import Formations from "../Sources/Formation.json";
import { Card, Typography } from "@mui/material";
import Style from "./Formations.module.css";

export default function FormationsPage() {
  return (
    <div className={Style.pageContainer}>
      {Formations.map((formation) => (
        <div className={Style.container} key={formation.id}>
          <Typography variant="h6">{formation.title}</Typography>
          <Typography>{formation.annee}</Typography>
          <Typography variant="body9">{formation.etablissement}</Typography>
          <br />
          <br />
          <Typography>{formation.description}</Typography>
        </div>
      ))}
    </div>
  );
}
