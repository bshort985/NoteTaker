const router = require("express").Router();
const { notes } = require("../db/db.json");
const { addNote } = require("../db/store")


//  GET route

router.get("/notes", (req, res) => {
    res.json(notes)
})
    
// POST Route

router.post("/notes", (req, res) => {
    const note = addNote(req.body, notes);
    res.json(note);
});

module.exports = router;