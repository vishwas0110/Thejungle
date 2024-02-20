const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Name is required !"]
    },
    Mobile:{
        type:Number,
        required:[true,"Mobile number is required !"]
    },
    Email:{
        type:String,
        required:[true,"Email is required !"]
    },
    Address:{
        type:String,
    },
    City:{
        type:String,
    },
    State:{
        type:String,
    },
    Flatno:{
        type:String,
    },
    Pincode:{
        type:String,
    },
    Password:{
        type:String,
        required:[true,"Password is required !"]
    },
});

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;