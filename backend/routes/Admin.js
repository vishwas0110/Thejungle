const express = require("express")
const AdminModel = require("../DB/models/Admin");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken")

const Router = express.Router();


Router.post("/login",async (req,res)=>{
    try{
        const Admin = await AdminModel.findOne({Email:req.body.Email});
        if(Admin){
            if(await bcrypt.compare(req.body.Password,Admin.Password)){
                jwt.sign({...Admin,Password:null},process.env.SECRET,{expiresIn:"2h"},(err,token)=>{
                    if(err){
                        throw new Error(err.message)
                    }else{
                        res.status(200).json({
                            success:true,
                            token
                        });
                    }
                })
            }
        }else{
            throw new Error("Admin not Found !")
        }

    }catch(e){
        res.status(200).json({
            success:false,
            message:e.message
        });
    }
});


Router.post("/register",async (req,res)=>{
    try{
        const admin = await AdminModel.findOne({Email:req.body.Email});
        if(admin){
            throw new Error("Admin already exist !")
        }else{
            const admin = new AdminModel(req.body);
            const pass = await bcrypt.hash(req.body.Password,10);
            admin.Password = pass;
            await admin.save().then(dta=>{  
                if(dta){
                    res.status(200).json({
                        success:true,
                        message:"Admin Registered !"
                    });
                }
            }).catch(err=>{
                throw new Error(err.message)
            })
        }
    }catch(e){
        res.status(200).json({
            success:false,
            message:e.message
        });
    }
});

module.exports = Router;