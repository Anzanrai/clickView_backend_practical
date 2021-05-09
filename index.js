const express = require('express');
const app = express();
const PORT = 8080;

const db = require('./initialiseDB');

app.use(express.json());


app.listen(PORT, () => {
    console.log(`[Playlists]: ${db.playlists}`)
    console.log(`Server runnning at the port ${PORT}`)
})