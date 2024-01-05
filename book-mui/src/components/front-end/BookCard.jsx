import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { CardActionArea, Typography, Box, Modal } from "@mui/material";
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
    </>
  );
};
