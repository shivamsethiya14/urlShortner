import { Router } from "express";
import { Uri } from "../model/url.model.js";
import { restrictto } from "../middleware/auth.js";
const Route =Router()
// Route.get('/',(req,res)=>{
//     return res.render('home')
// })
Route.get('/addmin/urls',restrictto(['ADMIN']),async(req,res)=>{
   // if(!req.user) return res.redirect('/login')
    const allUrls= await Uri.find({})
     return res.render("home",{
        urls:allUrls
     })})
Route.get('/',restrictto(['NORMAL','ADMIN']), async(req,res)=>{
   // if(!req.user) return res.redirect('/login')
    const allUrls= await Uri.find({createdBy:req.user._id})
     return res.render("home",{
        urls:allUrls
     })
})
Route.get("/signup",(req,res)=>{
   res.render("signup")
})
Route.get("/login",(req,res)=>{
   res.render("login")
})
export default Route