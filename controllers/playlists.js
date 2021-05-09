const db = require('../initialiseDB');
const { successResponse, errorResponse } = require('../middlewares/responseFormat');


const getPlaylists = (req, res) => {
    if(db.playlists){
        responseData = JSON.parse(db.playlists);
        return res.status(200).json(successResponse("OK", responseData, res.statusCode));
    }
    res.status(500).json(errorResponse("Could not retrieve Playlists", res.statusCode));
}

module.exports = {
    getPlaylists
};