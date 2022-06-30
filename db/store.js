const fs = require("fs");
const path = require("path");
const { v1: uuidv1 } = require('uuid');


// create POST function

function addNote(note, notesArray) {
    const { title, text } = note;
    const newNote = { title, text, id: uuidv1() }
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "./db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}




module.exports = { addNote };
  