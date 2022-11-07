//importing mongoose
const mongoose = require('mongoose');


//mongodb database url;
const mongoURL = 'mongodb://0.0.0.0/Darmaris';


//connecting to the database;
const mongoDatabase = () => {
    mongoose.connect(mongoURL, (error) => {
        if (!error) {
            console.log('Connected to local database: ' + mongoURL);
        } else {
            console.error(error.message);
        }
    });
}

//exporting
module.exports = {
    mongoDatabase,
}