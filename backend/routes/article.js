const express = require('express');
const router = express.Router();

const user = require('../middleware/user.js');
const multer = require('../middleware/multer-config.js');
const articleCtrl = require('../controllers/article.js');
const likeCtrl = require('../controllers/like.js');

//route création article
router.post('/', user, multer,articleCtrl.createArticle);

//route ensemble article
router.get('/' ,user,articleCtrl.getAllArticle);

//route d'un article
router.get('/:id',user, articleCtrl.getOneArticle);

//route modification d'article
router.put('/:id',user,multer, articleCtrl.modifyArticle);

//route suppression d'article
router.delete('/:id',user, articleCtrl.deleteArticle);

//route mention j'aime 
router.post('/:postId/like', user, likeCtrl.likeArticle);

// route ensemble article de l'utilisateur 
router.get('/all/:id', user, articleCtrl.getAllArticleUser);


// ajout de user pour plus de sécurité
// ajout de multer pour les images 
module.exports = router; 