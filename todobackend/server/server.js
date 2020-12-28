const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const usersRouter = require('./routes/users');

require('dotenv').config();

// var corsOptions = {
//   origin: "http://127.0.0.1"
// };

//app.use(cors(corsOptions));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/users', usersRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
