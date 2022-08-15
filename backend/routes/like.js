const express = require('express');
const router = express.Router();


const user = require('../middleware/user.js');
multer = require('../middleware/multer-config.js');
const commentaireCtrl = require('../controllers/like.js');

//route aime ou non commentaire 
router.post('/:id/like', user, commentaireCtrl.likeNotCommentaire);

//route emsemble like
router.get('/',user, commentaireCtrl.getAllLike);

module.exports = router; 