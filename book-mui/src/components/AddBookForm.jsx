import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import { TextField, Stack, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const AddBookForm = () => {
  const url = "http://localhost:3000/api/book/";
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
        <Stack spacing={2} width={900}>
          <TextField
            label="Title"
            name="title"
            type="text"
            onChange={handleInput}
          />
          <TextField
            label="Author First Name"
            name="authorFirstName"
            type="text"
            onChange={handleInput}
          />
          <TextField
            label="Author Last Name"
            name="authorLastName"
            type="text"
            onChange={handleInput}
          />
          <TextField
            label="Blurb"
            name="blurb"
            type="text"
            onChange={handleInput}
          />
          <TextField
            label="Image URL"
            name="imgUrl"
            type="text "
            onChange={handleInput}
          />
          <Button
            type="submit"
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
