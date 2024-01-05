import { DashboardAddBookButtn } from "./DashboardAddBookButtn";
import { DashboardInfo } from "./DashboardInfo";
import { DashboardManageButton } from "./DashboardManageButton";
import { DashboardViewButton } from "./DashboardViewButton";
import { Grid, Stack, Box, Typography } from "@mui/material";
export const ButtonGrid = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: "40%",
          margin: "0",
          marginRight: "30px",
          marginLeft: "300px",
        }}
      >
        <Grid item xs={5}>
          <DashboardViewButton />
        </Grid>
        <Grid item xs={7}>
          <DashboardManageButton />
        </Grid>
        <Grid item xs={5}>
          <DashboardAddBookButtn />
        </Grid>
        <Grid item xs={7}>
          <DashboardAddBookButtn />
        </Grid>
      </Grid>
    </>
  );
};
