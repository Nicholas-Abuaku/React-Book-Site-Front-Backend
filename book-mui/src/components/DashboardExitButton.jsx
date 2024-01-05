import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardHeader, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export const DashboardExitButton = () => {
  return (
    <Card
      sx={{
        width: "15.625vw",
        height: "15.739vh",
        background:
          "  radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% );",
        color: "white",
      }}
    >
      <CardActionArea component={Link} to={"/"}>
        <CardHeader
          title="Exit"
          action={
            <IconButton size="large">
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="subtitle1">View Main Page</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
