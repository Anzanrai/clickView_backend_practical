const router = require("express").Router();

const {getPlaylists, createPlaylist, updatePlaylist, deletePlaylist} = require("../controllers/playlists");

router.get('', getPlaylists);
router.post('', createPlaylist);
router.patch('/:id', updatePlaylist);
router.delete('/:id', deletePlaylist);

module.exports = router;