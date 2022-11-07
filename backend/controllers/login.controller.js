//importing database schema;
const {
    admin
} = require('../models/schema');

//login controller;
const loginController = async(req, res, next) => {
    const user = await admin.findOne({
        email: req.body.email,
        password: req.body.password,
    });

    if (user) {
        return res.json({
            status: 'ok',
            user: true
        });
    } else {
        return res.json({
            status: 'error',
            user: false,
        });
    }
}

//exporting loginController;
module.exports = {
    loginController,
}