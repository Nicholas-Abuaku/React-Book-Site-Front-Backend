import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import axios from "axios";

export const ManageBooksButton = (props) => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  function handleDelete() {
    const url = "http://localhost:3000/api/book/" + props.bookId;
    console.log(url);
    axios.delete(url);
    window.location.reload();
  }
  return (
    <>
      <IconButton id="actions-button" onClick={handleClick}>
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="actions-menu"
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};
