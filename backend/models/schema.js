const mongoose= require('mongoose');
const schema= mongoose.Schema;
const adminSchema= new schema(
    {
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true
        },
    }
);
const admin= mongoose.model('admin', adminSchema);

const electSchema= new schema({
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

const electronics= mongoose.model('electronics',electSchema);

const fashionSchema= new schema({
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

const fashions= mongoose.model('fashions',fashionSchema);

const farnitureSchema= new schema({
    image:{
        data:Buffer,
        contentType:String,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

const farniture= mongoose.model('farniture',farnitureSchema);
module.exports={
    electronics,
    fashions,
    admin,
    farniture
}

