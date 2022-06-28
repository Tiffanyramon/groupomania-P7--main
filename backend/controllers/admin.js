const db = require('../database/db.js');
const jwt = require('jsonwebtoken');

//obtenir les articles
exports.getAllArticle = (req, res, next) => {
    db.query(" select * from article inner join user on user.id = article.userid union select * from article inner join user on user.id"
   , function(err,result){
      if(err){
        console.log(err)
        return res.status(400).json({ error:"impossible d'avoir les articles"})
      }
      console.log(result)
      return res.status(200).json({ articles: result})
    })
  };

  //obtenir les commentaires
exports.getAllCommentaire = (req, res, next) => {
    db.query(" select * from commentaire", function(err,result){
      if(err){
        console.log(err)
        return res.status(400).json({ error:"impossible d'avoir les articles"})
      }
      return res.status(200).json({ articles: result})
    })
  };
  
  //supprimer article
  exports.deleteArticle = (req, res, next) => {
     db.query("DELETE FROM article where`id` = ? ", [id],function (err, result){
       if(err){
         console.log(err)
         return res.status(400).json({ error:"impossible de supprimer l'article"})
       }
       return res.status(201).json({message: "article supprime"})
     })
   };

    //supprimer commentaire
    exports.deleteArticle = (req, res, next) => {
    
    const id = req.params.id 
     db.query("DELETE FROM commentaire where`id` = ? ", [id],function (err, result){
       if(err){
         console.log(err)
         return res.status(400).json({ error:"impossible de supprimer le commentaire"})
       }
       return res.status(201).json({message: "commentaire supprime"})
     })
   };
   
    