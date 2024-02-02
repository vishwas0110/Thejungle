const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Name is required !"]
    },
    Email:{
        type:String,
        required:[true,"Email is required !"]
    },
    Password:{
        type:String,
        required:[true,"password is required !"]
    }
});

module.exports = mongoose.model("admin",AdminSchema);