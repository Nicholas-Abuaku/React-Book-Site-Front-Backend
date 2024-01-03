import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { CardActionArea, Typography } from "@mui/material";
export const BookCard = (props) => {
  return (
    <Card sx={{ width: "300px", marginTop: "5px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://m.media-amazon.com/images/I/71ls-I6A5KL._AC_UF894,1000_QL80_.jpg"
          sx={{ maxWidth: "100%", borderRadius: "5px" }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography>Midnight Library</Typography>
          <Typography>Matt Haig</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
