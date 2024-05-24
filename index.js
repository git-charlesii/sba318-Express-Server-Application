const express = require("express");

const mongoose = require("mongoose");


// Middlewares 


// ROUTES (highways to send and receive(get, post, patch, delete))
app.get('/', (req, res) => {
  res.send('We are on home');
});

app.post('/', (req, res) => {
  res.send('We are on posts');
});

// Connect to DB
mongoose.connect(process.env.ATLAS_URI);




const app = express();
const PORT = process.env.PORT || 3000;


// listening to the server
app.listen(3000);

//-------------------



