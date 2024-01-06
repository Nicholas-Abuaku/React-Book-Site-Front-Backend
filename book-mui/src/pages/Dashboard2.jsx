import React from "react";
import { Grid, Typography } from "@mui/material";
import { DashboardNav } from "../components/DashboardNav";
import { BackEndSideBar } from "../components/BackEndSideBar";
import { ButtonGrid } from "../components/ButtonGrid";
import { RandomBook } from "../components/RandomBook";
import { DashboardInfo } from "../components/DashboardInfo";
export const Dashboard2 = () => {
  return (
    <Grid
      container
      sx={{ border: "1px solid" }}
      width={"100%"}
      height={"100%"}
      direction={"row"}
    >
      <Grid item xs={12}>
        <BackEndSideBar />
      </Grid>
      <Grid item xs={12}>
        <DashboardNav />
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="h4" sx={{ marginBottom: "110px" }}>
          Admin Panel
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          height: "100%",
          marginLeft: "80px",
          marginTop: "10px",
        }}
      >
        <DashboardInfo />
        <ButtonGrid />
        <RandomBook />
      </Grid>
    </Grid>
  );
};
