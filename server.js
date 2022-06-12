const express = require('express');
const notes = require("./db/db.json");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Route 

app.get("/api/notes", (req, res) => {
    res.json(notes)
});


app.post("/api/notes", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});










// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));