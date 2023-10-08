const fs = require('fs');
const path = require('path');
const notes = require("express").Router();
const dbPath = path.join(__dirname, '../db/db.json'); // db pathg

const readFromFile = () => {
  return JSON.parse(fs.readFileSync(dbPath, 'utf8')); //function to read file
};

const writeToFile = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2)); // funcion to write file
};

notes.get('/', (req, res) => { // get route reads from db and sends json response of db object
    res.json(readFromFile());
});
  
notes.post('/', (req, res) => { // post route reads db.json and creates a newNote object from the request that then gets pushed and written into the database.
    const notes = readFromFile();
    console.log(notes)
    const newNote = {
        title: req.body.title,
        text: req.body.text
    };
    notes.push(newNote);
    writeToFile(notes);
    res.json(newNote);
});

module.exports = notes;