//importing dependencies
const express = require('express');

//initializing router
const router = express.Router();

//importing login controller;
const {
    loginController
} = require('../controllers/login.controller');

//importing get controllers;
const {
    getElectronicsController,
    getFashionsController,
    getFurnitureController,
} = require('../controllers/get.controller');

//importing post controllers;
const {
    postFurnitureController,
    postElectronicsController,
    postFashionController,
} = require('../controllers/post.controller');


//importing multer file upload middleware;
const {
    upload,
} = require('../middleware/multer.middleware');

//login route
router.post('/login', loginController);

//get routes
router.get('/electronics', getElectronicsController);

router.get('/fashions', getFashionsController);

router.get('/furniture', getFurnitureController);



//post Routes
router.post('/furniture', upload, postFurnitureController);

router.post('/electronics', upload, postElectronicsController);

router.post('/fashions', upload, postFashionController);



//exporting routes;
module.exports = {
    router,
}