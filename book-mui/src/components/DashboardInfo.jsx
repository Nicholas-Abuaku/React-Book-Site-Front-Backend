import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { CardHeader, IconButton } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export const DashboardInfo = () => {
  return (
    <Card
      sx={{
        width: "10%",
        height: "100%",
        background: "rgb(25,118,210)",
        backgroundColor:
          "linear-gradient(180deg, rgba(25,118,210,1) 21%, rgba(213,237,236,1) 27%)",
        color: "white",
        marginRight: "200px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar>
            <AdminPanelSettingsIcon />
          </Avatar>
        }
        title={"Admin"}
      />

      <CardContent>
        <Typography>Date: 31/12/2023</Typography>
        <Typography>Time: 11:59PM</Typography>
        <Typography>Database Size: 2 </Typography>
      </CardContent>
    </Card>
  );
};
