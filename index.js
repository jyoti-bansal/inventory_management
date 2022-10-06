const express=require("express");
const mongoose=require("mongoose");

const app=express();

const port=3000;
mongoose.connect("mongodb://localhost:27017/inventory",{
    useNewUrlParser:true,

})
.then(()=>{
    console.log("Connected!!!");
})
.catch((err)=>console.log(err));

app.listen(port,()=>{
    console.log("Listening....");
})