const jwt = require('jsonwebtoken');
//utilisation de Jsonwebtoken pour la vérification de l'user et admin
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token,
            process.env.JWT_SECRET); 
            const userId = decodedToken.userId;
            const admin =  decodedToken.admin;
            req.auth = {
                 userId, admin 
            }
            if(req.body.userId && req.body.userId !== userId) {
                throw 'Invalid user ID';
            } else {
                next();
            }
    } catch {
        res.status(401).json({
        error: new Error('Invalide request')
        });
    }
};