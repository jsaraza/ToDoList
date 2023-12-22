const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;
const path = require('path');


// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(bodyParser.json());

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, '../Frontend')));

// Your API endpoints go here
app.post('/api/tasks', (req, res) => {
    // Your route logic
});

app.listen(port, () => {
    console.log(`Server is run on http://localhost:${port}`);
});
