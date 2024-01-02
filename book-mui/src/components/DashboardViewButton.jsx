import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardHeader, IconButton } from "@mui/material";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import { Link } from "react-router-dom";

export const DashboardViewButton = () => {
  return (
    <Card
      sx={{
        width: "15.625vw",
        height: "15.739vh",
        background: " linear-gradient(160deg, #000ee9 0%, #80D0C7 100%);",
        color: "white",
      }}
    >
      <CardActionArea component={Link} to={"/dashboard/view-books"}>
        <CardHeader
          title="View"
          action={
            <IconButton size="large">
              <GridViewTwoToneIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="subtitle1">View All Books</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
