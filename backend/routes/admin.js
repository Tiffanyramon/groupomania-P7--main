const express = require('express');
const router = express.Router();

const user = require('../middleware/user.js');
const adminCtrl = require('../controllers/admin.js');


//route ensemble article
router.get('/article' ,user, adminCtrl.getAllArticle);

//route ensemble commentaire
router.get('/commentaire', user, adminCtrl.getAllCommentaire);

//route suppression article
router.delete('/article/:id',user, adminCtrl.deleteArticle);

//route suppression commenaire
router.post('/commentaire/:id', user, adminCtrl, deleteCommentaire);

module.exports = router; 