import { Box, Grid, Stack } from "@mui/material";
import { DashboardInfo } from "../components/DashboardInfo";
import { ButtonGrid } from "../components/ButtonGrid";
import { DashboardAddBookButtn } from "../components/DashboardAddBookButtn";
import { DashboardViewButton } from "../components/DashboardViewButton";
import { DashboardManageButton } from "../components/DashboardManageButton";
export const Dashboard = () => {
  return (
    <>
      <Box>
        <DashboardInfo />
        <ButtonGrid />
        <DashboardInfo />
      </Box>
    </>
  );
};
