import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useState } from "react";
import { Link } from "react-router-dom";
export const BackEndSideBar = () => {
  // return <Drawer variant="permanent" anchor="left">

  return (
    <Drawer variant="permanent" anchor="left" sx={{ height: "100%" }}>
      <List sx={{ height: "100vh" }}>
        {/* {["Dashboard", "Exit"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem button key="Dashboard" component={Link} to={"/dashboard"}>
          <ListItemIcon>
            <SpaceDashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          key="Exit"
          sx={{ marginTop: "50rem" }}
          component={Link}
          to={"/"}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </ListItem>
      </List>
    </Drawer>
  );
};
