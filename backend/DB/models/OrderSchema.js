const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    orderitems: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }],
    shippingAddress1: {
        type: String,
        required: [true, "shipping address is required !"]
    },
    shippingAddress2: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        required: [true, "city name is required !"]
    },
    zip: {
        type: String,
        required: [true, "zip code is required !"]
    },
    country: {
        type: String,
        required: [true, "country is required !"]
    },
    totalprice: {
        type: Number,
        required: [true, "total price is required !"]
    },
    name: { 
        type: String,
        required:[true,"Name is required !"]
    },
    email: { 
        type: String, 
        required:[true,"Email is required !"]
    },
    phoneno: { 
        type: Number,
        required:[true,"Phone is required !"]
    },
    dateOrdered: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Orders', OrderSchema);