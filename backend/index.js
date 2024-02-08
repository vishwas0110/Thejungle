const express= require('express');
const app=express();
const {connectDB}=require('./DB/connectdb');
const cors=require('cors');
require('dotenv/config');
connectDB();

//middleware
app.use(cors());
app.use(express.json());

const api=process.env.API_URL;

//Routes
const productRouter=require('./routes/Product');
const OrderRouter=require('./routes/Order');
const AdminRouter = require("./routes/Admin")

app.use(`${api}/products`,productRouter);
app.use(`${api}/orders`,OrderRouter);
app.use(`${api}/admin`,AdminRouter);


app.listen(9000,()=>{
console.log('server is running');
});