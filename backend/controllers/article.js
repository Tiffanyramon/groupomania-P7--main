const db = require('../database/db.js');
//créa article
exports.createArticle = (req, res, next) => {
    const message = req.body.message
    const imageurl = req.body.imageurl
  db.query("insert into article set message=?, imageurl=?",[ message, imageurl],function(err,result){
   if(err){
     console.log(err)
     return res.status(400).json({ error:"impossible de creer l'article"})
   }
   return res.status(201).json({message: "article cree"})
  })
};

//obtenir les articles
exports.getAllArticle = (req, res, next) => {
  db.query(" select * from article inner join user on user.id = article.userid", function(err,result){
    if(err){
      console.log(err)
      return res.status(400).json({ error:"impossible d'avoir les articles"})
    }
    console.log(result)
    return res.status(200).json({ articles: result})
  })
};

// obtenir un article 
exports.getOneArticle = (req, res, next) => {
    const id = req.params.id
 db.query("select * from article where id = ?", [id],function(err,result){
  if(err){
    console.log(err)
    return res.status(400).json({ error:"impossible d'avoir l'article'"})
  }
  return res.status(200).json({ article: result[0]})
    })

};

//modifier un article
exports.modifyArticle = (req, res, next) => {
    const message = req.body.message 
    const imageurl = req.body.imageurl
    const id = req.params.id
    db.query("update article set message= ?, imageurl= ? where id=?", [ message, imageurl, id ],function(err,result){
      if(err){
        console.log(err)
        return res.status(400).json({ error:"impossible de mettre à jour l'article"})
      }
      return res.status(200).json({message: "article mis à jour"})
     
    })
    
  };

  //supprimer article
  exports.deleteArticle = (req, res, next) => {
 const id = req.params.id 
  db.query("DELETE FROM article where`id` = ? ", [id],function (err, result){
    if(err){
      console.log(err)
      return res.status(400).json({ error:"impossible de supprimer l'article"})
    }
    return res.status(201).json({message: "article supprime"})
  })
};
 
  