import React from "react";
import { FrontEndNav } from "../../components/front-end/FrontEndNav";
import { BookCard } from "../../components/front-end/BookCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
export const BooksPage = () => {
  const [allBooks, setAllBooks] = useState([]);
  const url = "http://localhost:3000/api/book/";
  const updateBooks = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data.books);
      setAllBooks(res.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    updateBooks();
  }, []);
  return (
    <>
      <FrontEndNav />
      <Grid
        container
        direction={"row"}
        spacing={4}
        marginLeft={2}
        marginTop={2}
      >
        {allBooks.map((book) => (
          <Grid item xs={2}>
            <BookCard
              authorFirstName={book.authorFirstName}
              title={book.title}
              authorLastName={book.authorLastName}
              img={book.imgUrl}
              blurb={book.blurb}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
