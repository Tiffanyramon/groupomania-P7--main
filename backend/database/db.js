const mysql = require('mysql');

const connexion = mysql.createConnection({ 
    host:"localhost",
    user:"root",
    password:"",
    database:"groupomania",
})

connexion.connect(function(err){
    if(err){
        console.log(err)
        return
    }
    console.log("connecté base donnée")
})

module.exports = connexion
