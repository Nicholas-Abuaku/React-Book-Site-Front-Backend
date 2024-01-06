import React, { useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
import { TextField, Stack, Button, Typography } from "@mui/material";
import { useState } from "react";
import { BackEndSideBar } from "./BackEndSideBar";
import { EditSuccessAlert } from "./EditSuccessAlert";
import axios from "axios";

export const EditBookForm = (props) => {
  const url = "http://localhost:3000/api/book/";
  const getUrl = url + props.bookId;
  const [show, setShow] = useState(false);
  const [bookData, setBookData] = useState({
    authorFirstName: "",
    authorLastName: "",
    title: "",
    blurb: "",
    imgUrl: "",
  });
  const fetchBookData = async () => {
    try {
      const res = await axios.get(getUrl);
      // console.log(res.data.book.title);
      setBookData(res.data.book);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBookData();
  }, []);
  console.log("Get " + getUrl);
  const [post, setPost] = useState({
    authorFirstName: "",
    authorLastName: "",
    title: "",
    blurb: "",
    imgUrl: "",
  });
  const handleInput = (event) => {
    setBookData({ ...bookData, [event.target.name]: event.target.value });
    // setPost({ ...post, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(getUrl, bookData)
      .then(() => {
        setShow(true);
        setTimeout(() => setShow(false), 2000);
      })
      .catch((err) => console.log(err));
  }

  const updatedBookData = { ...bookData };
  for (const key in updatedBookData) {
    if (updatedBookData[key] === undefined) {
      updatedBookData[key] = props[key];
    }
  }

  console.log("Title: " + bookData.title);
  return (
    <>
      <BackEndSideBar />
      <form method="POST" onSubmit={handleSubmit}>
        <Stack
          spacing={2}
          width={900}
          sx={{ marginLeft: "30%", margiTop: "5%" }}
        >
          <Typography>Edit Book</Typography>
          <TextField
            label="Title"
            name="title"
            type="text"
            value={bookData.title}
            onChange={handleInput}
          />
          <TextField
            label="Author First Name"
            name="authorFirstName"
            type="text"
            value={bookData.authorFirstName}
            onChange={handleInput}
          />
          <TextField
            label="Author Last Name"
            name="authorLastName"
            type="text"
            value={bookData.authorLastName}
            onChange={handleInput}
          />
          <TextField
            label="Blurb"
            name="blurb"
            type="text"
            value={bookData.blurb}
            onChange={handleInput}
          />
          <TextField
            label="Image URL"
            name="imgUrl"
            type="text "
            value={bookData.imgUrl}
            onChange={handleInput}
          />
          <Stack direction={"row"}>
            <Button
              type="Update"
              variant="contained"
              color="warning"
              onChange={handleInput}
            >
              Submit
            </Button>
            {show && <EditSuccessAlert action="Updated" />}
          </Stack>
        </Stack>
      </form>
    </>
  );
};
