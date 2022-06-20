const express = require('express');
const router = express.Router();

const user = require('../middleware/user.js');
const multer = require('../middleware/multer-config.js');
const articleCtrl = require('../controllers/article.js');
const likeCtrl = require('../controllers/like.js');

//route créa article
router.post('/', user,articleCtrl.createArticle);

//route ensemble article
router.get('/' ,user,articleCtrl.getAllArticle);

//route un article
router.get('/:id',user, articleCtrl.getOneArticle);

//route modification article
router.put('/:id',user, articleCtrl.modifyArticle);

//route suppression article
router.delete('/:id',user, articleCtrl.deleteArticle);

//route aime 
router.post('/:postId/like', user, likeCtrl.likeArticle);

module.exports = router; 