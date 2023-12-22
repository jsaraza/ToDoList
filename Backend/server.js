const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let tasks = [];

app.post('/api/tasks', (req, res) => {
    const { task } = req.body;
    tasks.push(task);
    console.log("Received task:", task); // Log the task on the server side if needed
    res.json({ message: 'Task added successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
