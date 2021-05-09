const fs = require('fs');

let db = {};

db["videos"] = fs.readFileSync('./data/videos.json', (error, data) => {
    if(error){
        console.error(error.message)
    }
    return JSON.parse(data)
})

db["playlists"] = fs.readFileSync('./data/playlists.json', (error, data) => {
    if(error) {
        console.error(error.message)
    }
    return JSON.parse(data)
})

module.exports = db;