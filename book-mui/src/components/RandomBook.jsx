import React, { useEffect, useState } from "react";
import { Card, Button, Typography, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

export const RandomBook = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [randomBook, setRandomBook] = useState(null);
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/book/");
      setAllBooks(res.data.books);
      const randomIndex = Math.floor(Math.random() * res.data.books.length);
      setRandomBook(res.data.books[randomIndex]);
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
      <Box
        textAlign={"center"}
        sx={{ float: "right", border: "1px solid", borderRadius: "5px" }}
      >
        <Typography>Reccomended Book</Typography>
        {randomBook && (
          <Card>
            <CardMedia
              component={"img"}
              image={randomBook.imgUrl}
              title={randomBook.title}
              sx={{ objectFit: "contain", height: "400px" }}
            />
            <Typography>{randomBook.title}</Typography>
          </Card>
        )}
      </Box>
    </>
  );
};
