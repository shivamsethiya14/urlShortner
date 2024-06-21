import { Router } from "express";
import { Uri } from "../model/url.model.js";
const Route =Router()
// Route.get('/',(req,res)=>{
//     return res.render('home')
// })
Route.get('/', async(req,res)=>{
    const allUrls= await Uri.find({})
     return res.render('home',{
        urls:allUrls
     })
})
export default Route