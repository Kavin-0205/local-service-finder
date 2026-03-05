require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose
  .connect(process.env.MONG_URL,{ serverSelectionTimeoutMS: 10000 })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, 
});

const User = mongoose.model("User", userSchema);

app.post("/api/logion",async(req,res)=>{
  const{email,password}=req.body;
  const found=await User.findOne({email,password});
  if(!found) return res.status(401).json({message:"Invalid email/password"});

  return res.json({
    message:"Login success",
    role:found.role,
    user:{id:found._id, name: found.name,email:found.email},

  });
});

app.listen(3000, () => console.log("server running on port 3000"));