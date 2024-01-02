import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardHeader, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export const DashboardAddBookButtn = () => {
  return (
    <Card
      sx={{
        width: "15.625vw",
        height: "15.739vh",
        background: " linear-gradient(135deg, #179213 0%, #3eda44 100%);",
        color: "white",
      }}
    >
      <CardActionArea component={Link} to={"/dashboard/add-book"}>
        <CardHeader
          title="Add Book"
          action={
            <IconButton size="large">
              <AddIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="subtitle1">Add a new book</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
