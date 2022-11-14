//importing database schema

const {
    electronics,
} = require('../models/schema');

//get controllers;

//get electronics controller;
const getElectronicsController = async(req, res, next) => {
    await electronics.find({})
        .then((response) => {
            if (response) {
                res.json({ data: response });
            } else {
                console.log('furniture error: ', error);
            }
        })
        .catch((error) => {
            console.error(error.message);
            res.status(error.status).json(error.message)
        });
    next();
}

//exporting controllers
module.exports = {
    getElectronicsController,
}