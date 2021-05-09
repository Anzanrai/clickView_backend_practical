const fs = require('fs');

let db = {};

rawVideosData = fs.readFileSync('./data/videos.json', (error, data) => {
    if(error){
        console.error(error.message)
    }
    return data;
})

rawPlaylistData = fs.readFileSync('./data/playlists.json', (error, data) => {
    if(error) {
        console.error(error.message)
    }
    return data;
})

db["videos"] = JSON.parse(rawVideosData);
db["playlists"] = JSON.parse(rawPlaylistData);

module.exports = db;