const router = require("express").Router();

const {getPlaylists} = require("../controllers/playlists");

router.get('', getPlaylists);

module.exports = router;