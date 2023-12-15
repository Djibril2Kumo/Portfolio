import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Style from "./Header.module.css";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(Boolean(anchorEl));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  return (
    <nav>
      <Box className={Style.container}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Djibril Samassa
        </Typography>

        <List sx={{ display: "flex" }}>
          <ListItem disablePadding>
            <ListItemButton className={Style.test} sx={{ textAlign: "center" }}>
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

        <button
          className={Style.customButton}
          id="fade-button"
          aria-controls={openMenu ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <Typography variant="b2">Documents</Typography>
        </button>
        <Menu
          anchorEl={anchorEl}
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          open={openMenu}
          onClose={() => {
            handleClose();
          }}
        >
          <MenuItem onClick={console.log("handleClose")}>
            <a
              download={"SAMASSA_DJIBRIL_LETTRE"}
              href="SAMASSA_DJIBRIL_LDM.pdf"
            >
              {" "}
              Lettre de motivation
            </a>
          </MenuItem>
          <MenuItem onClick={console.log("handleClose")}>
            <a download={"SAMASSA_DJIBRIL_CV"} href="SAMASSA_DJIBRIL_CV.pdf">
              CV
            </a>
          </MenuItem>
          <MenuItem onClick={console.log("handleClose")}>
            <a download={"SAMASSA_DJIBRIL_REDUX_TOOLKIT"} href="RTK_certif.pdf">
              Certificat Redux Toolkit (Code Academy)
            </a>
          </MenuItem>
        </Menu>
      </Box>
    </nav>
  );
}
