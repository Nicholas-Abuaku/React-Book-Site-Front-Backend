import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";
export const DashboardNav = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: "10px" }}>
      <Toolbar>
        <IconButton>
          <MenuBookIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Manager
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button component={Link} to={"/dashboard"} color="inherit">
            Dashboard
          </Button>
          <Button color="inherit">Exit</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
