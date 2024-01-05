import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { CardHeader, IconButton } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useEffect, useState } from "react";
import axios from "axios";

export const DashboardInfo = () => {
  const [date, setDate] = useState(new Date());
  const [dbSize, setDBSize] = useState(0);
  function currentDate() {
    useEffect(() => {
      const timer = setInterval(() => {
        setDate(new Date());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);
  }

  const getDBSize = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/book/");
      setDBSize(res.data.books.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDBSize();
  }, []);
  return (
    <Card
      sx={{
        width: "20%",
        height: "400px",
        background: "rgb(25,118,210)",
        backgroundColor:
          "linear-gradient(180deg, rgba(25,118,210,1) 21%, rgba(213,237,236,1) 27%)",
        color: "white",
        marginRight: "0px",
        textAlign: "center",
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
        <Typography>Date: {date.toDateString()}</Typography>
        <Typography>Time: 11:59PM</Typography>
        <Typography>Database Size: {dbSize} </Typography>
      </CardContent>
    </Card>
  );
};
