const mongoose=require('mongoose');
require('dotenv/config');
let uri=process.env.DB_URI
const connectDB=()=>{
    const result=mongoose.connect(uri)
    .then(()=>{
        console.log("DB connected");
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports={connectDB};