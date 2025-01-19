const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

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
    firstName:{
        type:String,
        default:"Yourname",
        maxLength: 50,
        trim:true,
        required: true
    },    
    lastName:{
        type:String
    }
});

const accountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance :{
        type : Number,
        required : true
    }
})

const Account = mongoose.model('Account',accountSchema);
const User = mongoose.model('User',UserSchema);

module.exports={
    User,
    Account
};
