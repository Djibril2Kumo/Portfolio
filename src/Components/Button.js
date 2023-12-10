import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const CustomButton = ({
  content,
  variant = "contained",
  color,
  action = () => {
    toast.info("Aucune action assignée à votre bouton");
  },
}) => {
  return (
    <Button
      sx={{ padding: "0.5em 1em", margin: "0.5em" }}
      variant={variant}
      color={color}
      onClick={() => {
        action();
      }}
    >
      {content}
    </Button>
  );
};

CustomButton.propTypes = {
  content: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  action: PropTypes.func,
};

export default CustomButton;
