const express = require('express');
const router = express.Router();
const getCharById = require('../controllers/getCharById.js');
const usuarioLogin = require('../controllers/login.js');
const { postFav, deleteFav } = require('../controllers/handleFavorites.js');
const getAllCharas = require('../controllers/getAllChars.js')


router.get('/character/:id', getCharById);
router.get('/login', usuarioLogin);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

router.get ('/allCharacters', getAllCharas);


module.exports = router;