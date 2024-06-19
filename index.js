import express, { urlencoded } from "express"
import connectDB from "./src/Db/db.js";
import dotev from "dotenv"
import { Route } from "./src/route/user.route.js";
const app=express();
dotev.config({
    path: "./.env"
})
connectDB().then(()=>{
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})})
.catch((err)=>{
    console.log("mongoo db connection failed!!!",err);
    console.log(' rs');
})
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.json())
// app.use(express.urlencoded())
app.use("/url",Route)

