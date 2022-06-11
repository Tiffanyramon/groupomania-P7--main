const express = require('express');
const router = express.Router();


const user = require('../middleware/user');
multer = require('../middleware/multer-config');
const commentairectrl = require('../controllers/commentaire');

// route créa commentaire
router.post('/', user, commentairectrl.createCommentaire);

//route emsemble commentaire
router.get('/',user, commentairectrl.getAllCommentaire);

//route un commentaire
router.get('/:id', user,commentairectrl.getOneCommentaire);

//route modification commentaire
router.put('/:id', user,commentairectrl.modifyCommentaire);

//suppression commentaire
router.delete('/:id', user, commentairectrl.deleteCommentaire);

module.exports = router