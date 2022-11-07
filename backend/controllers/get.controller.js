//importing database schema

const {
    electronics,
    fashions,
    farniture
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
        });
    next();
}

///get fashions controller;
const getFashionsController = async(req, res, next) => {
    await fashions.find({})
        .then((response) => {
            if (response) {
                res.json({ data: response });
            } else {
                console.log('furniture error: ', error);
            }
        })
        .catch((error) => {
            console.error(error.message);
        });
}

//get furniture controller;
const getFurnitureController = async(req, res, next) => {
    await farniture.find({})
        .then((response) => {
            if (response) {
                res.json({ data: response });
            } else {
                console.log('furniture error: ', error);
            }
        })
        .catch((error) => {
            console.error(error.message);
        });
}

//exporting controllers
module.exports = {
    getElectronicsController,
    getFashionsController,
    getFurnitureController,
}