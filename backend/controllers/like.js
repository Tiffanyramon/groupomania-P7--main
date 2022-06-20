const { query } = require('../database/db.js');
const db = require('../database/db.js');

// liker ou  les commentaires

exports.likeArticle = async (req, res, next) => {
   const postId = req.params.postId
   const userId = req.auth.userId

   db.query("select * from article where id = ?", [postId],function(err,result){
    if(err || !result.length ){
      console.log(err)
      return res.status(400).json({ error:"impossible d'avoir l'article'"})
    }
    const post = result[0]
    const recupuserLike = JSON.parse(post.userlike)
    let userlike = []
    if (recupuserLike.length) {
      userlike=recupuserLike
    }
    if ( recupuserLike.includes(userId)){
      return res.status(400).json({ error:"like deja mis"})
    }
    const nombrelike = post.nombrelike +1
     db.query("update article set nombrelike=?, userlike=?   where id=?", [ nombrelike, userlike, postId ],function(err,result){
      if(err){
        console.log(err)
        return res.status(400).json({ error:"impossible de mettre à jour l'article"})
      }
      return res.status(200).json({message: "article mis à jour"})
     
    })
  })
  

  };

  