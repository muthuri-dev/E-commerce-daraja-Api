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
    postStkController,
} = require('../controllers/post.controller');

//importing  token middleware;
const {
    tokenMiddleware,
} = require('../middleware/token.middleware');



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

//stk form payment;
router.post('/stk', tokenMiddleware, postStkController);


//exporting routes;
module.exports = {
    router,
}