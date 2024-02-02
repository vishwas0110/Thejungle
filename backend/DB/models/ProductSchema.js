const mongoose=require('mongoose');
const ProductSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name  is required !"]
    },
    description:{
        type:String,
        required:[true,"desc is required !"]
    },
    images:[{
        type:String
}],
    brand:{
        type:String,
        required:[true,"brand name is required !"] 
    },
    price:{
        type:Number,
        required:[true,"price is required !"],
        default:0
    },
    category:{
        type:String,
        required:[true,"category is required !"]
    },
    subcategory:{
        type:String,
        required:[true,"sub category is required !"]
    },
    stock:{
        type:Number,
        min:0,
        max:500,
        required:[true,"product stock is required !"]
    },
    reviews:{
        type:Number,
        default:0
    },
    dateCreated:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('Products',ProductSchema);