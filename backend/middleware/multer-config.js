const multer = require('multer');
// type de fichier accepté 
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
};
// stockage dans le diskstorage 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    // création du nom du fichier unique remplacement des espaces par un undescore + date
    filename: (req, file, callback) => {
        const name = file.originalname.split (' ').join('-');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('image');