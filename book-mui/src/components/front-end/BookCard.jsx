import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
export const BookCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card sx={{ width: "300px", marginTop: "5px" }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            image={props.img}
            sx={{ maxWidth: "100%", borderRadius: "5px" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography>{props.title}</Typography>
            <Typography variant="subtitle">
              {props.authorFirstName + " " + props.authorLastName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* Use Bootstrap for modal */}

      <Dialog onClose={handleClose} open={open} sx={{ textAlign: "center" }}>
        <DialogTitle>
          {props.title}
          <Typography variant="subtitle2">
            {" " + props.authorFirstName + " " + props.authorLastName}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <img
            src={props.img}
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
          <Typography>{props.blurb}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
