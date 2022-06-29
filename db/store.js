const fs = require("fs");
const path = require("path");


// create POST function

function addNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "./db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}




module.exports = { addNote };
  