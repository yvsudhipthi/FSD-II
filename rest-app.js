const express = require('express');

const app = express();

const PORT = 3000;

// DELETE task
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;

    res.send(`Task ${id} deleted successfully`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});