import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
export const AllBooksTable = () => {
  const url = "http://localhost:3000/api/book/";
  const [allBooks, setAllBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data.books);
      setAllBooks(res.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "900px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allBooks.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="center">{row._id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>
                {
                  <>
                    {row.authorFirstName} {row.authorLastName}{" "}
                  </>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
