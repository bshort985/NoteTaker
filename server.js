const express = require('express');
const notes = require("./db/db.json");
const fs = require("fs");
const path = require("path");

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


// POST Route
app.post("/api/notes", (req, res) => {
   
    const note = newNote(req.body, notes);
    res.json(req.body);
});

// function to store notes

function newNote(body, notesArray){
    console.log(body);
    console.log(notesArray);
    const note = body;
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
}









// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));