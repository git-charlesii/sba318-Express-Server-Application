const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

// Middlewares 


// ROUTES (highways to send and receive(get, post, patch, delete))
app.get('/', (req, res) => {
  res.send('We are on home');
});

app.post('/', (req, res) => {
  res.send('We are on posts');
});

// Connect to DB
mongoose.connect('')


// listening to the server
app.listen(3000);