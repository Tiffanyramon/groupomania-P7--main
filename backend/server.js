const http = require ('http'); // importation du package de node créa
const app = require ('./app'); //importation de app.js

// renvoie du port valide 
const normalizePort = val => {
    const port = parseInt(val,10);
    
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port; 
    }
    return false;
};
// Port utilise par l'appli express
const port = normalizePort(process.env.Port ||'3001');
app.set ('port', port);
//recherche erreur
const errorHandler = error => {
    if (error.syncall !=='listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
    switch (error.code){
        case 'EACCES':
            console.error(bind + 'require elevated privilieges.');
            process.exit(1);
            break;
        case 'EADDRINUSE': 
             console.error(bind + 'is alrealy in use.');
             process.exit(1);
             break;
        default:
            throw error;
     }
};

const server = http.createServer(app);//fonction qui va recevoir requetes et reponses

server.on('error', errorHandler);
server.on('linstening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
    console.log('Listening on', + bind);
});
server.listen(port); // Le server attend les requetes au port 3000