const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const mongoose= require('mongoose');
const multer= require('multer');
const PORT= 8080;
const fs= require('fs');


//initializing app
const app =express();

//database
const monhoURL= 'mongodb://0.0.0.0/Darmaris';

//database schemas
const {admin,electronics,fashions,farniture}= require('./models/schema');

//middlewares
app.use(bodyParser.json());
app.use(cors());

//static folders
app.use('/uploads',express.static('./uploads'));


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

//multer file upload middleware
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload=multer({storage:storage}).single('image');


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

//posting electronics to the database.
app.post('/electronics',upload, function(req,res){
    const electronicAdd= new electronics({
        image:req.file.filename,
        description:req.body.description,
        price:req.body.price
    });
    electronicAdd.save(function(err){
        if(!err){
            console.log({electronicAdd});
        }else{
            console.log('electronic add error: ',err);
        }
    });
});


//posting fashion to the database.
app.post('/fashions',upload, function(req,res){
    const fashionAdd= new fashions({
        image:req.file.filename,
        description:req.body.description,
        price:req.body.price
    });
    fashionAdd.save(function(err){
        if(!err){
            console.log({fashionAdd});
        }else{
            console.log('electronic add error: ',err);
        }
    });
});


//posting furniture to the database.
app.post('/furniture',upload, function(req,res){
    const furnitureAdd= new farniture({
        image:{
            data:fs.readFileSync('uploads/'+req.file.filename),
            contentType:'image/png'
        },
        description:req.body.description,
        price:req.body.price
    });
    furnitureAdd.save(function(err){
        if(!err){
            console.log({furnitureAdd});
        }else{
            console.log('electronic add error: ',err);
        }
    });
});

//get all the furnitures route
app.get('/furnitures', function(req,res){
    farniture.find({},function(errror,response){
        if(response){
            res.json({data:response});
        }else{
            console.log('furniture error: ',error);
        }
    })
})


//deleting route
