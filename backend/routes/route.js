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
} = require('../controllers/get.controller');

//importing post controllers;
const {
    postElectronicsController,
} = require('../controllers/post.controller');


//importing multer file upload middleware;
const {
    upload,
} = require('../middleware/multer.middleware');

//login route
router.post('/login', loginController);

//get routes
router.get('/electronics', getElectronicsController);


//post Routes

router.post('/electronics', upload, postElectronicsController);



//exporting routes;
module.exports = {
    router,
}