const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.js');
const password = require ('../middleware/password.js');
const user = require('../middleware/user.js');

//route création compte 
router.post('/signup', password,userCtrl.signUp);

//route identification
router.post('/login', userCtrl.login);

//route modification user
router.put('/',user, userCtrl.modifyUser);

//route ensemble user
router.get('/', user,userCtrl.getAllUser);

//route affichage connexion user
router.get('/profil',user, userCtrl.getOneUser);

//route suppression user
router.delete('/',user, userCtrl.deleteUser);

module.exports = router; 