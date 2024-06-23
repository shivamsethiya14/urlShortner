import {  mongoose,Schema } from "mongoose";
const uriSchema=new Schema({
    shortid:{
        type: String,
        required:true,
        unique:true
    },
    redirect:{
        type:String,
        required:true,
    },
    watchhistory:[
        {
            timestamps:{
                type:Number,
                
            }
        }
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

export  const  Uri=mongoose.model("Uri",uriSchema)