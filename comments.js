// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load comments
const comments = require('./comments');

// Define a route for comments
app.get('/comments', (req, res) => {
  // Return comments as JSON
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});