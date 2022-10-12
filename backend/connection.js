const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const mongoose= require('mongoose');
const multer= require('multer');
const PORT= 8080;


//initializing app
const app =express();

//database
const monhoURL= 'mongodb://0.0.0.0/Darmaris';

//database schemas
const admin= require('./models/schema');

//middlewares
app.use(bodyParser.json());
app.use(cors());


//connecting to database and server
mongoose.connect(monhoURL)
.then(function(){
    app.listen(PORT, function(err){
        if(!err){
            console.log(`App listening to port ${PORT} and connected to database`);
        }else{
            console.error('listening error: ',err);
        }
    });
})
.catch(function(err){
    console.log('Mongo error: ',err);
});


//application Routes
//admin login route
app.post('/login',async function(req,res){
    const user= admin.findOne({
        email:req.body.email,
        password:req.body.password,
    });
    if(user){
        return res.json({status:'ok', user:true});
    }else{
        return res.json({status:'error', user:false});
    }
});

//getting all route.
app.get('/',function(req,res){
    res.json({mess:'server running'});
});

//posting to the database.


//updating route


//deleting route
