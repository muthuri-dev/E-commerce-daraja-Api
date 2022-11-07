//importing multer;
const multer = require('multer');


//creating storage;
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// initializing middleware
const upload = multer({ storage: storage }).single('image');

//exporting multer middleware

module.exports = {
    upload,
}