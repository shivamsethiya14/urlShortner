import mongoose, { Schema,Mongoose } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
       type:String,
       required:true 
    },
    password:{
        type:String,
        required:true,
        default:"NORMAL"
    }
},{timestamps:true})

export const User=mongoose.model("User",userSchema);