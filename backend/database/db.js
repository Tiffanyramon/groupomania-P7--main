const mysql = require('mysql');
// pour crée une connexion a la base de donées 
const connexion = mysql.createConnection({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

connexion.connect(function(err){
    if(err){
        console.log(err)
        return
    }
    console.log("connecté base donnée")
})

module.exports = connexion
