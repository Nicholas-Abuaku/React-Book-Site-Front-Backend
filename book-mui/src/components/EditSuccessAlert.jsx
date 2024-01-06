import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const EditSuccessAlert = (props) => {
  return <Alert severity="success">Book {props.action} Successfully</Alert>;
};
