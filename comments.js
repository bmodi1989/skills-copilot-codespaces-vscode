// Create web server
// Create comments array
// Create route for GET /comments
// Create route for POST /comments
// Create route for DELETE /comments/:id
// Create route for PUT /comments/:id
// Start server on port 3000

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  comments.splice(req.params.id, 1);
  res.json({ message: 'Comment deleted' });
});

app.put('/comments/:id', (req, res) => {
  comments[req.params.id] = req.body;
  res.json({ message: 'Comment updated' });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Test the server
// Open Postman
// Create a POST request to http://localhost:3000/comments
// Set body to raw and JSON
// Add a JSON object with a comment attribute
// Send the request
// Create a GET request to http://localhost:3000/comments
// Send the request
// Create a PUT request to http://localhost:3000/comments/0
// Set body to raw and JSON
// Add a JSON object with a comment attribute
// Send the request
// Create a DELETE request to http://localhost:3000/comments/0
// Send the request
// Create a GET request to http://localhost:3000/comments
// Send the request
// Close Postman
// Stop the