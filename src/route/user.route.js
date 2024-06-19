import { Router } from "express";
import { Uri } from "../model/url.model.js";
import {shortidgenerateController, handleanlitics} from "../controller/uri.controler.js"
const Route=Router();
Route.post("/",shortidgenerateController)
Route.get("/:shortid", async (req,res)=>{
    const shortId=req.params.shortid;
    console.log(shortId);
    const entry=await Uri.findOneAndUpdate({
        shortid:shortId,
    },{
        $push:{
           watchhistory:{
                timestamps:Date.now()
            }
        }
    })
    // console.log(entry);
     res.redirect(entry.redirect)
}
)
Route.get("/anlytics/:shortid", handleanlitics)
export {Route}