const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blogDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('DB error', err));

// Use Routes
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});