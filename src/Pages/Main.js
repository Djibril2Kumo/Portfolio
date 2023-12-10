/*eslint-disable*/
import {react, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import CustomButton from "../Components/Button";
import PropTypes from "prop-types";
import Modal from "../Components/Modal";


// WCAG + RGAA



function ResponsiveAppBar() {
  const [showModal, setShowModal] = useState(true)
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
  return (
    showModal ?
    <Modal/>
    : null
    // <AppBar
    //   sx={{
    //     padding: "1em",
    //   }}
    //   position="static"
    // >
    //   <Grid container xs={12}>
    //     <Grid item xs={3}>
    //       <Typography
    //         variant="h6"
    //       >
    //         LOGO
    //       </Typography>
    //     </Grid>

    //     <Grid
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //       }}
    //       item
    //       xs={6}
    //     >
    //       <MenuItem>1</MenuItem>
    //       <MenuItem>1</MenuItem>
    //       <MenuItem>1</MenuItem>
    //       <MenuItem>1</MenuItem>
    //     </Grid>

    //     <Grid item xs={3}>
    //       {buttons.map((btn) => (
    //         <CustomButton
    //           key={btn.id}
    //           content={btn.content}
    //         />
    //       ))}
    //     </Grid>
    //   </Grid>
    // </AppBar>
  );
}

ResponsiveAppBar.propTypes = {
  buttons: PropTypes.object,
};

export default ResponsiveAppBar;
