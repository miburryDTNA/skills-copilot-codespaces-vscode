// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route for each request
// 4. Start server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors'); // Cross origin resource sharing

// Setup variables
const app = express();
const PORT = 4001;
const commentsByPostId = {};

// Setup middleware
app.use(bodyParser.json());
app.use(cors());

// Setup routes
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  // Create random id for comment
  const commentId = randomBytes(4).toString('hex');
  // Get content from request body
  const { content } = req.body;
  // Get comments for post id
  const comments = commentsByPostId[req.params.id] || [];
  // Add new comment to comments array
  comments.push({ id: commentId, content });
  // Update comments for post id
  commentsByPostId[req.params.id] = comments;
  // Send comment back to client
  res.status(201).send(comments);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});