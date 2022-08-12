const db = require('../database/db.js');
//création articles
exports.createArticle = (req, res, next) => { 
  console.log(req.body)
    const message = req.body.message
    let imageurl = null 
   if(req.file) {
     imageurl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} 
    const userid = req.body.userid
    const userlike = JSON.stringify([])
    // utilisation de db.query pour exploiter la bases de données relationnelles ici insertion de la table article
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
  // obtentions des articles avec le classement par le post le plus récent
  db.query(" select article.id, article.message, article.imageurl,article.userid, article.nombrelike, article.userlike , user.nom, user.prenom from article inner join user on user.id = article.userid order by article.date desc ", function(err,result){
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
  // obtention des article de l'utilisateur classement par post le plus récent
  db.query("select article.id, article.message, article.imageurl,article.userid, article.nombrelike, article.userlike , user.nom, user.prenom from article inner join user on user.id = article.userid  where article.userid = ? order by article.date desc ",[id] ,function(err,result){
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
    // selection des post par l'identifant 
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
    // selection du post par l'id 
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
// modifier l'image ou le texte par l'id
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
//  selectionner l'article à supprimer par l'identifiant
 db.query("select * from article where `id` = ?", [id],function(err,result){
  if(err){
   console.log(err)
   return res.status(400).json({ error:"impossible d'avoir l'article'"})
  }
  if( !req.auth.admin && result[0].userid !== req.auth.userId ){
    return res.status(401).json({error: "accès interdit"})
  }
  // article supprimer avec la fonction delete avec l'id
  db.query("DELETE FROM article where`id` = ? ", [id],function (err, result){
    if(err){
      console.log(err)
      return res.status(400).json({ error:"impossible de supprimer l'article"})
    }
    return res.status(201).json({message: "article supprime"})
  })
})


};
 
  