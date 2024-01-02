import React from "react";
import { AddBookForm } from "../components/AddBookForm";
export const AddBook = () => {
  return (
    <>
      <h1>Add Book</h1>
      <div style={{ alignContent: "center", justifyContent: "center" }}>
        <AddBookForm />
      </div>
    </>
  );
};
