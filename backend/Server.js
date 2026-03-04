const dotenv=require("dotenv");
dotenv.config();
const express= require("express");
const cors= require("cors");
const mongoose= require("mongoose");
const axios=require("axios");
const dot=process.env.MONG_URL;
const app= express();

app.use(cors());
app.use(express.json());

mongoose.connect(dot)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

const serviceschema=new mongoose.Schema({
    name:String,
    email:String,
    body:String
});
const Service=mongoose.model("Service",serviceSchema);
app.get("/import",async(requestAnimationFrame,res)=>{
    try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
        const data=response.data;
        const saved=await S
    }
})

app.listen(3000,()=>{
    console.log("server running on port 5000");
});