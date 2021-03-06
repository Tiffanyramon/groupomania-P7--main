const db = require('../database/db.js');
//créa article
exports.createArticle = (req, res, next) => { 
  console.log(req.body)
    const message = req.body.message
    let imageurl = null 
   if(req.file) {
     imageurl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} 
    const userid = req.body.userid
    const userlike = JSON.stringify([])
  db.query("insert into article set userid=?, message=?, imageurl=? ,nombrelike=?, userlike=?",[userid, message, imageurl, 0, userlike ],function(err,result){
   if(err){
     console.log(err)
     return res.status(400).json({ error:"impossible de creer l'article"})
   }
   return res.status(201).json({message: "article cree"})
  })
};

//obtenir les articles
exports.getAllArticle = (req, res, next) => {
  db.query(" select article.id, article.message, article.imageurl,article.userid, article.nombrelike, article.userlike , user.nom, user.prenom from article inner join user on user.id = article.userid ", function(err,result){
    if(err){
      console.log(err)
      return res.status(400).json({ error:"impossible d'avoir les articles"})
    }
    console.log(result)
    return res.status(200).json({ articles: result})
  })
};

//obtenir article user
exports.getAllArticleUser = (req, res, next) => {
  const id = req.params.id 
  db.query("select article.id, article.message, article.imageurl,article.userid, article.nombrelike, article.userlike , user.nom, user.prenom from article inner join user on user.id = article.userid  where article.userid = ? ",[id] ,function(err,result){
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
    let imageurl
    const id = req.params.id
    db.query("select * from article where id = ?", [id],function(err,result){
   if(err){
    console.log(err)
    return res.status(400).json({ error:"impossible d'avoir l'article'"})
  }
  if( !req.auth.admin && result[0].userid !== req.auth.userId ){
    return res.status(401).json({error: "accès interdit"})
  }
  if(req.file){
    imageurl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} 
else{
  imageurl = result[0].imageurl
}console.log(imageurl)
db.query("update article set message= ?, imageurl= ? where id=?", [ message, imageurl, id ],function(err,result){
  if(err){
    console.log(err)
    return res.status(400).json({ error:"impossible de mettre à jour l'article"})
  }
  return res.status(200).json({message: "article mis à jour"})
 
})
    })
    
    
  };

  //supprimer article
  exports.deleteArticle = (req, res, next) => {
 const id = req.params.id 
 db.query("select * from article where `id` = ?", [id],function(err,result){
  if(err){
   console.log(err)
   return res.status(400).json({ error:"impossible d'avoir l'article'"})
  }
  if( !req.auth.admin && result[0].userid !== req.auth.userId ){
    return res.status(401).json({error: "accès interdit"})
  }
  db.query("DELETE FROM article where`id` = ? ", [id],function (err, result){
    if(err){
      console.log(err)
      return res.status(400).json({ error:"impossible de supprimer l'article"})
    }
    return res.status(201).json({message: "article supprime"})
  })
})


};
 
  