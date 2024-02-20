const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Name is required !"]
    },
    Email:{
        type:String,
        required:[true,"Email is required !"]
    },
    Orders:[],
    userId:String,
    status:{
        type:Boolean,
        default:false
    },
    paymentDetails:Object,
    totalAmount:{
        type:String
    },
    Mobile:{
        type:String,
        required:[true,"Mobile number is required !"]
    },
    Address:{
        type:String,
        required:[true,"Address is required !"]
    },
    City:{
        type:String,
        required:[true,"City is required !"]
    },
    State:{
        type:String,
        required:[true,"State is required !"]
    },
    Pincode:{
        type:String,
        required:[true,"Pincode is required !"]
    },
    Flatno:{
        type:String,
        required:[true,"Flat no is required !"]
    },
    transactionID:{
        type:String
    },
});

const orderModel = mongoose.model("orders",orderSchema);

module.exports = orderModel;

