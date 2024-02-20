const express = require("express");
const userModel = require("../DB/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();


router.post("/add",async(req,res)=>{
    try{
        const user = await userModel.findOne({Email:req.body.Email});
        if(user){
            throw new Error("user already exist !");
        }else{
            const user = new userModel(req.body);
            const hash = await bcrypt.hash(req.body.Password,10);
            user.Password = hash;
            const saved = await user.save();
            if(saved){
                res.status(200).json({
                    success:true,
                    message:"user saved !"
                });
            }else{
                throw new Error("failed to save ");
            }
        }   
    }catch(e){
        res.status(200).json({
            success:false,
            message:e.message
        });
    }
})

router.post("/login",async (req,res)=>{
    try{   
        const user = await userModel.findOne({Email:req.body.Email});
        if(user){
            if(await bcrypt.compare(req.body.Password,user.Password)){
                jwt.sign({user},process.env.SECRET,{expiresIn:"2h"},(err,token)=>{
                    if(err){
                        throw new Error(err.message);
                    }else{
                        res.status(200).json({
                            success:true,
                            token,
                            user
                        });
                    }
                })
            }else{  
                throw new Error("invalid password");    
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

module.exports = router;