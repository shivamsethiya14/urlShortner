import { Router } from "express";
import { Uri } from "../model/url.model.js";
import {shortidgenerateController, handleanlitics,redirectcontroller} from "../controller/uri.controler.js"
const Route=Router();
Route.post("/",shortidgenerateController)
Route.get("/:shortid",redirectcontroller
)
Route.get("/r/test",(req,res)=>{
    return res.end('<h1>hello<h1>')
})
Route.get("/anlytics/:shortid", handleanlitics)
export {Route}