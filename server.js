// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');


// this creates and instance of express
const app = express();
// opens the application on localhost.3001 in the browser
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())





app.listen(PORT, () =>
console.log('Express server listening on port ${PORT}'))