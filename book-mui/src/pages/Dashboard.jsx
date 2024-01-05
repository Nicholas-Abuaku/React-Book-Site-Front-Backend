import { Box, Grid, Stack, Typography } from "@mui/material";
import { DashboardInfo } from "../components/DashboardInfo";
import { ButtonGrid } from "../components/ButtonGrid";
import { DashboardAddBookButtn } from "../components/DashboardAddBookButtn";
import { DashboardViewButton } from "../components/DashboardViewButton";
import { DashboardManageButton } from "../components/DashboardManageButton";
import { BackEndSideBar } from "../components/BackEndSideBar";
import { RandomBook } from "../components/RandomBook";
import { DashboardNav } from "../components/DashboardNav";
export const Dashboard = () => {
  return (
    <>
      <Box>
        <DashboardNav />
        <BackEndSideBar />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          minHeight={"100vh"}
          sx={{ border: "1px solid" }}
        >
          <ButtonGrid />
          <DashboardInfo />
          <RandomBook />
        </Box>
      </Box>
    </>
  );
};
