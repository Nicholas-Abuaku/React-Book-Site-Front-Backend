const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  authorFirstName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
    trim: true,
  },

  authorLastName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
    trim: false,
  },

  title: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 400,
    trim: false,
  },

  blurb: {
    type: String,
    required: false,
    minLength: 1,
    trim: false,
  },
  imgUrl: {
    type: String,
    required: false,
    minLength: 1,
  },
});

module.exports = mongoose.model("Book", bookSchema);
