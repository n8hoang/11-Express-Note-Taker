const fs = require('fs');
const path = require('path');
const notes = require("express").Router();
const dbPath = path.join(__dirname, '../db/db.json'); // db path

const readFromFile = () => {
  return JSON.parse(fs.readFileSync(dbPath, 'utf8')); //function to read file
};

notes.get('/', (req, res) => { // get route reads from db and sends json response of db object
    res.json(readFromFile());
});
module.exports = notes;