const express = require('express');
const router = express.Router();


const user = require('../middleware/user');
multer = require('../middleware/multer-config');
const commentairectrl = require('../controllers/like');

//route aime ou non commentaire 
router.post('/:id/like', user, commentairectrl.likeNotCommentaire);
//route emsemble like
router.get('/',user, commentairectrl.getAllLike);