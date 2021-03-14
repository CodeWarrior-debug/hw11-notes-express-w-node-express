// Dependencies
const express = require('express');
const fs = require("fs");
const app = express();
const path = require("path");

const {
    v4: uuidv4
} = require('uuid'); //  uuid will generate unique id's for each saved note

// Sets an initial port, used in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// ROUTER
// UNUSED (FOLDER VERSION) - The below points our server to a series of "route" files. // These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// GET /notes returns the notes.html file.
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/notes.html'));
});

// GET * returns the index.html file.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// GET /api/notes reads the db.json file and return all saved notes as JSON.
app.get('/api/notes', function (req, res) {
    let noteData = fs.readFileSync("./db/db.json");
    noteData = JSON.parse(noteData);
    res.json(noteData)
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post("/api/notes", function (req, res) {
    try {
        let obj = req.body; //gets text of active object
        let noteData = fs.readFileSync("./db/db.json"); //reads stored notes in file
        noteData = JSON.parse(noteData);
        obj.id = uuidv4(); // applies a unique string to object's notes id field
        noteData.push(obj); // adds to array

        fs.writeFileSync("./db/db.json", JSON.stringify(noteData)); //writes to storage file
        res.redirect('back'); //refreshes page to show added note

    } catch (err) {
        console.log(err);
    }
});

// `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.delete('/api/notes/:id', function (req, res) {
    let notesInfo = fs.readFileSync("./db/db.json");
    notesInfo = JSON.parse(notesInfo);
    const id = req.params.id; //figure out the id of the note being deleted, thanks express documentation
    const index = notesInfo.findIndex(x => x.id === id); //learn index of note with that id inside notes Array
    notesInfo.splice(index, 1); //delete whole note at that index position
    fs.writeFileSync("./db/db.json", JSON.stringify(notesInfo));
    res.redirect('back');
})

// Start app on specified port
app.listen(PORT, function () {
    console.log(PORT);
});