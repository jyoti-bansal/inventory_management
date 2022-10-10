const express=require("express");
const mongoose=require("mongoose");
const authRoute=require('./routes/auth.js');
const userRoute=require('./routes/users');
const userProduct=require('./routes/products');
const userCart=require('./routes/cart');

const app=express();

const port=3000;
mongoose.connect("mongodb://localhost:27017/inventory",{
    useNewUrlParser:true,

})
.then(()=>{
    console.log("Connected!!!");
})
.catch((err)=>console.log(err));

//Calling api routes from here......
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",userProduct);
app.use("/api/cart",userCart);

app.listen(port,()=>{
    console.log("Listening....");
})