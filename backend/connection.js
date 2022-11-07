const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;


//initializing app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//static folders
app.use('/uploads', express.static('./uploads'));

//importing and connecting to the database;
const { mongoDatabase } = require('./databases/mongodb');
mongoDatabase();

//importing router;
const { router } = require('./routes/route');


//application Routes;
app.use('/shop', router);

//connecting app with server2
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`App connected to server port ${PORT}`);
    } else {
        console.error(error.message);
    }
});