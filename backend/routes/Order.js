const express = require("express");
const orderModel = require("../DB/models/Order");
const userModel = require("../DB/models/User");

const router = express.Router();

router.post("/add",async(req,res)=>{
    try{
        const order = new orderModel(req.body);
        const user = await userModel.findOne({Email:req.body.Email});
        if(user){
            order.userId = user._id;
            const saved = await order.save();
            if(saved){
                res.status(200).json({
                    success:true,
                    orderID:saved._id,
                    userID:user._id
                })
            }else{
                throw new Error("cannot save order");
            }
        }else{
            throw new Error("user not found !");
        }
    }catch(e){
        res.status(200).json({
            success:false,
            message:e.message
        });
    }
})

router.get("/all",async(req,res)=>{
    try{
        console.log("call")
        const orders = await orderModel.find();
        console.log(orders)
        if(orders){
            res.status(200).json({
                success:true,
                orders
            });
        }
    }catch(e){
        res.status(200).json({
            success:false,
            message:e.message
        });
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const order = await orderModel.findById(req.params.id);
        if(order){
            res.status(200).json({
                success:true,
                order
            });
        }else{
            throw new Error("Order not Found !")
        }
    }catch(e){
        res.status(200).json({
            success:false,
            message:e.message
        });
    }
})

module.exports = router;