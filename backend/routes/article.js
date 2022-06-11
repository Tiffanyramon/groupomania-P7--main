const express = require('express');
const router = express.Router();

const user = require('../middleware/user');
const multer = require('../middleware/multer-config');
const articlectrl = require('../controllers/article.js');

//route créa article
router.post('/', user,articlectrl.createArticle);

//route ensemble article
router.get('/' ,user,articlectrl.getAllArticle);

//route un article
router.get('/:id',user, articlectrl.getOneArticle);

//route modification article
router.put('/:id',user, articlectrl.modifyArticle);

//route suppression article
router.delete('/:id',user, articlectrl.deleteArticle);

//route aime ou non article
//router.post('/:id/like', user, articlectrl.likeNotArticle);*/

module.exports = router; 