const router = require("express").Router();

const {getPlaylists, createPlaylist, updatePlaylist} = require("../controllers/playlists");

router.get('', getPlaylists);
router.post('', createPlaylist);
router.patch('/:id', updatePlaylist);

module.exports = router;