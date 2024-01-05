import React, { useEffect, useState } from "react";
import { Card, Button, Typography, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

export const RandomBook = () => {
  const [allBooks, setAllBooks] = useState([]);
  var length = allBooks.length;
  const [randomBook, setRandomBook] = useState([]);
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/book/");
      setAllBooks(res.data.books);
      setRandomBook(res.data.books[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    //Get all books
    //Pick random number in range of size of books array
    //Display that books image and title
    <>
      {console.log(length)}
      <Box
        textAlign={"center"}
        sx={{ float: "right", border: "1px solid", borderRadius: "5px" }}
      >
        <Typography>Reccomended Book</Typography>

        <Card sx={{ width: "300px" }}>
          <CardMedia
            component={"img"}
            image={randomBook.imgUrl}
            title="Ok"
            sx={{ objectFit: "contain", height: "400px" }}
          />
          <CardContent>{randomBook.title}</CardContent>
        </Card>
      </Box>
    </>
  );
};
