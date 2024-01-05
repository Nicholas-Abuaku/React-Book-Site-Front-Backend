import React from "react";
import { ManageTable } from "../components/ManageTable";
import { BackEndSideBar } from "../components/BackEndSideBar";
export const Manage = () => {
  return (
    <>
      <BackEndSideBar />
      <h1>Manage</h1>
      <ManageTable />
    </>
  );
};
