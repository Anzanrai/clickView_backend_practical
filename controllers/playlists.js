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
        fs.writeFileSync('./data/playlists.json', JSON.stringify(db.playlists));
    } catch(error) {
        return res.status(500).json(errorResponse(error.message, res.statusCode));
    }
    // initialiseDb();
    res.status(201).json(successResponse("Playlist created", db.playlists, res.statusCode));
}
module.exports = {
    getPlaylists,
    createPlaylist
};