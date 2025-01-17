const mongoose = require("mongoose");

mongoose.connect(process.env.DB);

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        default:"Yourname",
        min: 3,
        required: true
    },
    password:{
        type:String,
        minLength: 6,
        required: true
    }  ,  
    firstname:{
        type:String,
        default:"Yourname",
        maxLength: 50,
        trim:true,
        required: true
    },    
    Lastname:{
        type:String,
        required: true
    }
});

const User = mongoose.model('User',UserSchema);

module.exports={
    User
};
