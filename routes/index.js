const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes');
const app = express();
app.use(express.static('public'));

app.use("/notes", notesRouter)


module.exports = app;