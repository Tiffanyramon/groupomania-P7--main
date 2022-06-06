const passwordValidator = require('password-validator');
// schema pour valider un mdp
var schema = new passwordValidator();

schema
.is().min(7)        //7 lettres minimum 
.is().max(40)      // 40 lettres maximum
.has().uppercase()  // doit contenir des majuscules
.has().lowercase()   // doit contenir des minuscules
.has().digits(1)    // au moins 1 chiffre
.has().not().spaces() // Ne doit pas avoir d'espace
.is().not().oneOf(['Passw0rd','Password1','1Password','Azerty1']); // Interdit 


module.exports = (req, res, next) => {
  if(schema.validate(req.body.password)){
    next();
  }else{
      return res.status(400).json({ error: `le mot de passe n'est pas assez fort + ${schema.validate('req.body.password', { list: true })}`})
  }
}