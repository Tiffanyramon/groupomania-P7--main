const db = require('../database/db.js');

//création commentaire
exports.createCommentaire = (req, res, next) => {
    const message = req.body.message
    const imageurl = req.body.imageurl
  db.query("insert into commentaire set message=?, imageurl=?",[ message, imageurl],function(err,result){
   if(err){
     console.log(err)
     return res.status(400).json({ erro: "impsooble de creer l'article"})
   }
   return res.status(201).json ({message: "article cree"})
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

// obtenir un commentaire 
exports.getOneCommentaire = (req, res, next) => {
    const id = req.params.id
 db.query("select * from commentaire where id = ?", [id],function(err,result){
  if(err){
    console.log(err)
    return res.status(400).json({ error:"impossible d'avoir le commentaire"})
  }
  return res.status(200).json({ article: result[0]})
    })
};

//modifier un commentaire
exports.modifyCommentaire = (req, res, next) => {
    const message = req.body.message 
    const imageurl = req.body.imageurl
    const id = req.params.id
    db.query("update article set message= ?, imageurl= ? where id=?", [ message, imageurl, id ],function(err,result){
        if(err){
          console.log(err)
          return res.status(400).json({ error:"impossible de mettre à jour le commentaire"})
        }
        return res.status(200).json({message: "commentaire mis à jour"})
       
      })
  };

  //supprimer commentaire
  exports.deleteCommentaire = (req, res, next) => {
 const id = req.params.id 
  db.query("DELETE FROM commentaire where`id` = ? ", [id],function (err, result){
    if(err){
      console.log(err)
      return res.status(400).json({ error:"impossible de supprimer le commentaire"})
    }
    return res.status(201).json({message: "commentaire supprime"})
  })
};