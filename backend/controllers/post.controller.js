//importing database schema;
const {
    electronics,
    fashions,
    farniture
} = require('../models/schema');

//importing file system;
const fs = require('fs');

//post controllers;

//electronics post controller;

const postElectronicsController = (req, res, next) => {
    const electronicAdd = new electronics({
        image: {
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: 'image/png'
        },
        description: req.body.description,
        price: req.body.price
    });
    electronicAdd.save((err) => {
        if (!err) {
            console.log({ electronicAdd });
        } else {
            console.log('electronic add error: ', err);
        }
    });
}

//fashion post controller;
const postFashionController = (req, res, next) => {
    const fashionAdd = new fashions({
        image: {
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: 'image/png'
        },
        description: req.body.description,
        price: req.body.price
    });
    fashionAdd.save(function(err) {
        if (!err) {
            console.log({ fashionAdd });
        } else {
            console.log('fashion add error: ', err);
        }
    });
}

//furniture post controller;
const postFurnitureController = (req, res, next) => {
    const furnitureAdd = new farniture({
        image: {
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: 'image/png'
        },
        description: req.body.description,
        price: req.body.price
    });
    furnitureAdd.save(function(err) {
        if (!err) {
            console.log({ furnitureAdd });
        } else {
            console.log('electronic add error: ', err);
        }
    });
}

//exporting controllers;
module.exports = {
    postElectronicsController,
    postFashionController,
    postFurnitureController,
}