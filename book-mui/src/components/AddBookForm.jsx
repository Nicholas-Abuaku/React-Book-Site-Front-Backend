import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import { TextField, Stack, Button, Typography } from "@mui/material";
import { useState } from "react";
import { BackEndSideBar } from "./BackEndSideBar";
import axios from "axios";

export const AddBookForm = (props) => {
  const url = "http://localhost:3000/api/book/";
  const getUrl = url + props.bookId;

  console.log("Get " + getUrl);
  const [post, setPost] = useState({
    authorFirstName: "",
    authorLastName: "",
    title: "",
    blurb: "",
    imgUrl: "",
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(url, post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <Stack
          spacing={2}
          width={900}
          sx={{ marginLeft: "30%", margiTop: "5%" }}
        >
          <Typography>Add Book</Typography>
          <TextField
            label="Title"
            name="title"
            type="text"
            defaultValue={props.title}
            onChange={handleInput}
          />
          <TextField
            label="Author First Name"
            name="authorFirstName"
            type="text"
            defaultValue={props.authorFirstName}
            onChange={handleInput}
          />
          <TextField
            label="Author Last Name"
            name="authorLastName"
            type="text"
            defaultValue={props.authorLastName}
            onChange={handleInput}
          />
          <TextField
            label="Blurb"
            name="blurb"
            type="text"
            placeholder={props.blurb}
            defaultValue={props.blurb}
            onChange={handleInput}
          />
          <TextField
            label="Image URL"
            name="imgUrl"
            type="text "
            defaultValue={props.imgUrl}
            onChange={handleInput}
          />
          <Button
            type="Update"
            variant="contained"
            color="success"
            onChange={handleInput}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};
