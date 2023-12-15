/*eslint-disable*/
import { react, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import CustomButton from "../Components/Button";
import PropTypes from "prop-types";
import Modal from "../Components/Modal";
import Header from "../Components/Header";

// WCAG + RGAA

function ResponsiveAppBar() {
  const [showModal, setShowModal] = useState(true);
  const buttons = [
    {
      id: 0,
      content: "C",
    },
    {
      id: 1,
      content: "LDM",
    },
  ];
  return showModal ? (
    <Modal
      disableModal={
        ()=>{setShowModal(false)}
      }
    />
  ) : <Header/>;
}

ResponsiveAppBar.propTypes = {
  buttons: PropTypes.object,
  disableModal: PropTypes.func
};

export default ResponsiveAppBar;
