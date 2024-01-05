import React from "react";
import { AddBookForm } from "../components/AddBookForm";
import { BackEndSideBar } from "../components/BackEndSideBar";
export const AddBook = () => {
  return (
    <>
      <BackEndSideBar />
      <div style={{ alignContent: "center", justifyContent: "center" }}>
        <AddBookForm />
      </div>
    </>
  );
};
