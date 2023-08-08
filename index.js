const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to port 3000

// Serve static files from the "public" folder
app.use(express.static('public'));

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, Express ');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});