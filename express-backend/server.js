//imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//New instance of express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//importing routes
const Books = require("./Routes/Books");
app.use("/api", Books);

//Connect from mongoose to mongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/books", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("error", err);
    process.exit(1);
  }
};

connectToDB();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
