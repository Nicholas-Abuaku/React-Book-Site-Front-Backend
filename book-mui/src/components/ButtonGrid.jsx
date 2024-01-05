import { DashboardAddBookButtn } from "./DashboardAddBookButtn";
import { DashboardInfo } from "./DashboardInfo";
import { DashboardManageButton } from "./DashboardManageButton";
import { DashboardViewButton } from "./DashboardViewButton";
import { Grid, Stack, Box, Typography } from "@mui/material";
import { DashboardExitButton } from "./DashboardExitButton";
export const ButtonGrid = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: "40%",
          margin: "0",
          marginRight: "100px",
          marginLeft: "100px",
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
          <DashboardExitButton />
        </Grid>
      </Grid>
    </>
  );
};
