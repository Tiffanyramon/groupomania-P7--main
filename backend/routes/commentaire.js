const express = require('express');
const router = express.Router();


const user = require('../middleware/user.js');
multer = require('../middleware/multer-config.js');
const commentaireCtrl = require('../controllers/commentaire.js');

// route créa commentaire
router.post('/', user, multer, commentaireCtrl.createCommentaire);

//route emsemble commentaire
router.get('/',user, commentaireCtrl.getAllCommentaire);

//route un commentaire
router.get('/:id', user,commentaireCtrl.getOneCommentaire);

//route modification commentaire
router.put('/:id', user, multer, commentaireCtrl.modifyCommentaire);

//suppression commentaire
router.delete('/:id', user, commentaireCtrl.deleteCommentaire);

module.exports = router