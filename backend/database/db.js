const mysql = require('mysql');
// 
const connexion = mysql.createConnection({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

connexion.connect(function(err){
    if(err){
        console.log(err)
        return
    }
    console.log("connecté base donnée")
})

module.exports = connexion
