const db = require('../database/db.js');

// liker ou disliker les commentaires
exports.likeNotCommentaire = async (req, res, next) => {
    const { userId, like } = req.body;
    const { id } = req.params;
  
    switch (like) {
      case 1:
        return Sauce.updateOne(
          { _id: id },
          { $push: { usersLiked: userId }, $inc: { likes: 1 } }
        )
          .then(() => res.status(200).json({ message: "Updated" }))
          .catch((e) => res.status(400).json({ error: "Error" }));
      case 0:
        const sauce = await Sauce.findOne({ _id: id });
  
        if (sauce.usersLiked.includes(userId)) {
          return Sauce.updateOne(
            { _id: id },
            { $pull: { usersLiked: userId }, $inc: { likes: -1 } }
          )
            .then(() => res.status(200).json({ message: "Updated" }))
            .catch((e) => res.status(400).json({ error: "Error" }));
        } else if (sauce.usersDisliked.includes(userId)) {
          return Sauce.updateOne(
            { _id: id },
            { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 } }
          )
            .then(() => res.status(200).json({ message: "Updated" }))
            .catch((e) => res.status(400).json({ error: "Error" }));
        } else {
          return res
            .status(400)
            .json({ error: "L'utilisatuer n'a pas donné de retour" });
        }
  
      case -1:
        return Sauce.updateOne(
          { _id: id },
          { $push: { usersDisliked: userId }, $inc: { dislikes: 1 } }
        )
          .then(() => res.status(200).json({ message: "Updated" }))
          .catch((e) => res.status(400).json({ error: "Error" }));
    }
  };

  //obtenir les likes
exports.getAllLike = (req, res, next) => {
    db.query(" select * from like", function(err,result){
      if(err){
        console.log(err)
        return res.status(400).json({ error:"impossible d'avoir les likes"})
      }
      return res.status(200).json({ articles: result})
    })
  };
  
  