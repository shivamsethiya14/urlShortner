import express, { urlencoded } from "express"
import connectDB from "./src/Db/db.js";
import dotev from "dotenv"
import { Route } from "./src/route/user.route.js";
import path from "path"
import { Uri } from "./src/model/url.model.js";
import staticRoute from "./src/route/staticRouter.route.js"
import { url } from "inspector";
import cookieParser from "cookie-parser";
import userRoute from "./src/route/userlogin.route.js"
import { redirectcontroller } from "./src/controller/uri.controler.js";

import {  checkforauthentiction, restrictto } from "./src/middleware/auth.js";
const app=express();
app.use(cookieParser())
app.use(checkforauthentiction)
app.set('view engine','ejs')
const p=app.set('views',path.resolve("D:/urlShortner/src/views"))


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

app.use(express.urlencoded({extended:false,limit:"16kb"}))
app.use(express.json())
// app.use(express.urlencoded())
app.use("/url",restrictto(["NORMAL","ADMIN"]),Route)
app.use("/",staticRoute)
app.use("/user",userRoute)

app.get("/url/:shortid",redirectcontroller);


