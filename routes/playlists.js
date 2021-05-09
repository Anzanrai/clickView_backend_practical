const router = require("express").Router();

const {getPlaylists, createPlaylist} = require("../controllers/playlists");

router.get('', getPlaylists);
router.post('', createPlaylist);

module.exports = router;