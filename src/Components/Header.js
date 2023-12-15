import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Style from "./Header.module.css"

export default function Header() {
  return (
    <nav>
      <Box className={Style.container}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Djibril Samassa
        </Typography>
        <Divider />
        <List sx={{ display: "flex" }}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Expériences"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Compétences"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Formations"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </nav>
  );
}
