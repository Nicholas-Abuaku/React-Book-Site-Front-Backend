//Routes
const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

//Upload a book
router.post("/book", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook
      .save()
      .then((savedBook) => {
        console.log(savedBook);
        res.status(201).json({ msg: "Book saved" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Fucking hell" });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Unable to save new contanct" });
  }
});

//Get ALL books
router.get("/book", async (req, res) => {
  try {
    Book.find()
      .then((books) => {
        console.log(books);
        res.status(200).json({ books: books });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "unable to get contacts" });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "unable to get books" });
  }
});

//Get Specific Book
router.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    Book.findById(id)
      .then((book) => {
        console.log(book);
        res.status(200).json({ book: book });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "cant find da book" });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "cant find book" });
  }
});

//Update Method
router.put("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedBook = req.body;
    await Book.findOneAndUpdate({ _id: id }, updatedBook, { new: true })
      .then((updatedBook) => {
        console.log("Updated contact");
        res.status(200).json({ msg: "Book Updated" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Unable to update book" });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Unable to update book" });
  }
});

//Delete Method

router.delete("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Book.findByIdAndDelete(id)
      .then((deletedBook) => {
        console.log(deletedBook);
        res.status(200).json({ msg: "Book deleted" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Failed to remove book" });
      });
  } catch (err) {
    console.log(err);
    res.status(200).json({ msg: "Failed to delete book" });
  }
});

module.exports = router;
