const express= require('express');
const app=express();
const {connectDB}=require('./DB/connectdb');
const cors=require('cors');
require('dotenv/config');
connectDB();

//middleware
app.use(cors({
    origin:["https://junglethetribe.com","https://www.junglethetribe.com","http://localhost:3000"]
}));
app.use(express.json());

const api=process.env.API_URL;

//Routes
const productRouter=require('./routes/Product');
const OrderRouter=require('./routes/Order');
const PaymentRouter = require("./routes/Payment");
const AdminRouter = require("./routes/Admin")
const userRoute = require("./routes/User");

app.use(`${api}/products`,productRouter);
app.use(`${api}/orders`,OrderRouter);
app.use(`${api}/admin`,AdminRouter);
app.use(`${api}/payment`,PaymentRouter);
app.use(`${api}/user`,userRoute);


app.listen(9000,()=>{
console.log('server is running');
});