require('dotenv').config()
//importation des packages
const express = require("express");
const path = require('path');
const helmet =  require('helmet');
const cors = require('cors');
const app = express();
//routes
const articleRoutes = require ("./routes/article.js");
const userRoutes = require ("./routes/user.js");
const commentaireRoutes = require("./routes/commentaire.js");


app.use('/images', express.static(path.join(__dirname, 'images')))

app.use((req, res, next) => {
    //acceder a l'api
    res.setHeader('Access-Control-Allow-Origin', '*')
    // headers possible
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    //methode
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTION')
    next()
});


app.use(cors());
app.use(helmet());

app.use(express.json());

app.use('/api/user',userRoutes);
app.use('/api/article',articleRoutes);
app.use('/api/commentaire',commentaireRoutes);




module.exports = app

