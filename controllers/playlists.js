const db = require('../initialiseDB');
const fs = require('fs');
const { successResponse, errorResponse } = require('../middlewares/responseFormat');
const {getNewId} = require("../utils/getNewId");


const getPlaylists = (req, res) => {
    if(db.playlists){
        responseData = db.playlists;
        return res.status(200).json(successResponse("OK", responseData, res.statusCode));
    }
    res.status(500).json(errorResponse("Could not retrieve Playlists", res.statusCode));
}

const createPlaylist = (req, res) => {
    let newPlaylist = req.body;
    if(!newPlaylist.name){
        return res.status(400).json(errorResponse("Please provide name for your playlist.", res.statusCode));
    }
    if(!newPlaylist.id){
        newPlaylist.id = getNewId(db.playlists);
    } else {
        newPlaylist.id = parseInt(req.body.id)
    }
    try{
        db.playlists.push(newPlaylist);
        let data = JSON.stringify(db.playlists, null, 4);
        console.log(data);
        fs.writeFileSync('./data/playlists.json', data);
    } catch(error) {
        return res.status(500).json(errorResponse(error.message, res.statusCode));
    }
    res.status(201).json(successResponse("Playlist created", db.playlists, res.statusCode));
}

const updatePlaylist = (req, res) => {
    let playlistId = parseInt(req.params.id);
    let requiredPlaylist = db.playlists.find( playlist => playlist.id === playlistId);
    if(requiredPlaylist){
        for (const [key, value] of Object.entries(req.body)) {
            requiredPlaylist[`${key}`] = value;
        }
        // requiredPlaylist = req.body;
        try {
            let fileContent = JSON.parse(fs.readFileSync('./data/playlists.json'));
            fileContent = fileContent.filter(content => content.id !== requiredPlaylist.id)
            console.log(fileContent);
            fileContent.push(requiredPlaylist);
            fs.writeFileSync('./data/playlists.json', JSON.stringify(fileContent, null, 2));
            console.log(fileContent);
        } catch (error) {
            console.log(error);
            return res.status(400).json(errorResponse("Failed to update playlist."));
        }
        return res.status(200).json(successResponse("Playlist updated successfully", requiredPlaylist, res.statusCode));
    }
    res.status(400).json(errorResponse("Playlist not found to update.", res.statusCode));
}

module.exports = {
    getPlaylists,
    createPlaylist,
    updatePlaylist
};