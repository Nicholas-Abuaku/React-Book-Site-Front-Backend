import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
export const DashboardManageButton = () => {
  return (
    <Card
      sx={{
        width: "15.625vw",
        height: "15.739vh",
        background: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        color: "white",
      }}
    >
      <CardActionArea component={Link} to={"/dashboard/manage"}>
        <CardHeader
          title="Manage"
          action={
            <IconButton size="large">
              <SettingsIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="subtitle1">Manage Books Database</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
