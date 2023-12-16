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
import React, { useEffect, useState } from "react";
import Style from "./Header.module.css";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Person2Icon from "@mui/icons-material/Person2";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(Boolean(anchorEl));
  const [menuToDisplay, setMenuToDisplay] = useState();
  const [selected, setSelected] = useState(0);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setWindowSize(e.currentTarget.innerWidth);
  };

  const sections = [
    { id: 0, name: "Formations" },
    { id: 1, name: "Expériences" },
    { id: 2, name: "Compétences" },
    { id: 3, name: "A propos de moi" },
    { id: 4, name: "Livre blanc" },
  ];
  const downloadMenuItem = [
    {
      type: "download",
      id: 0,
      title: "Lettre de motivation",
      download: "SAMASSA_DJIBRIL_LETTRE",
      href: "SAMASSA_DJIBRIL_LDM.pdf",
    },
    {
      type: "download",
      id: 1,
      title: "CV",
      download: "SAMASSA_DJIBRIL_CV",
      href: "SAMASSA_DJIBRIL_CV.pdf",
    },
    {
      type: "download",
      id: 2,
      title: "Certificat Redux Toolkit (Code Academy)",
      download: "SAMASSA_DJIBRIL_REDUX_TOOLKIT",
      href: "RTK_certif.pdf",
    },
  ];
  const contactMenuItem = [
    {
      id: 0,
      title: "Tel: 06 37 03 56 41",
      href: "tel:0637035641",
    },
    {
      id: 0,
      title: "Email: djibrilsamassa@outlook.com",
      href: "mailto:djibrilsamassa@outlook.com",
    },
  ];

  const handleClick = (event, menu) => {
    if (menu === "download") {
      setMenuToDisplay(downloadMenuItem);
    } else {
      setMenuToDisplay(contactMenuItem);
    }
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const content = (
    <span
      style={{
        width: `${windowSize > 1200 ? "60vw" : "fit-content"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: `${windowSize > 1200 ? "row" : "column"}`,
      }}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: `${windowSize > 1200 ? "row" : "column"}`,
        }}
      >
        {sections.map((s) => {
          return (
            <span key={s.id}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={() => {
                    setSelected(s.id);
                  }}
                >
                  <ListItemText primary={s.name} />
                </ListItemButton>
              </ListItem>
              {selected === s.id ? (
                <Divider className={Style.selected} />
              ) : null}
            </span>
          );
        })}
      </List>

      <span
        style={{
          display: "flex",
          flexDirection: `${windowSize > 1200 ? "row" : "column"}`,
        }}
      >
        <button
          className={Style.customButton}
          id="fade-button"
          aria-controls={openMenu ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={(e) => {
            handleClick(e, "download");
          }}
        >
          <SaveAltIcon />
        </button>
        <button
          className={Style.customButton}
          id="fade-button"
          aria-controls={openMenu ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={(e) => {
            handleClick(e, "contact");
          }}
        >
          <Person2Icon />
        </button>
      </span>

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
        {menuToDisplay?.map((item) => (
          <MenuItem
            onClick={() => {
              handleClose();
            }}
            key={item.id}
          >
            <a
              download={item.type === "download" ? item.download : null}
              href={item.href}
            >
              {" "}
              {item.title}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </span>
  );

  return (
    <nav>
      <Box className={Style.container}>
        <h2 className={Style.logo}>Djibril Samassa</h2>

        {windowSize > 1200 ? (
          <span> {content}</span>
        ) : (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(e) => {
              setBurgerMenuOpen(true);
              setMenuAnchorEl(e.currentTarget);
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      <Menu
        anchorEl={menuAnchorEl}
        open={burgerMenuOpen}
        onClose={() => setBurgerMenuOpen(false)}
      >
        {content}
      </Menu>
    </nav>
  );
}
