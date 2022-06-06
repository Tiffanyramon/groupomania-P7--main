const express = require('express');
const router = express.Router();
const userctrl = require('../controllers/user');
const password = require ('../middleware/password');
const user = require('../middleware/user');

//route créa compte 
router.post('/signup', password,userctrl.signUp);

//route identification
router.post('/login', userctrl.login);

//route modification user
router.put('/:id',user, userctrl.modifyUser);

//route ensemble user
router.get('/', user,userctrl.getAllUser);

//route affichage connexion user
router.get('/:id',user, userctrl.getOneUser);

//route suppression user
router.delete('/:id',user, userctrl.deleteUser);

module.exports = router; 