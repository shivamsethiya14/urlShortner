import { User } from "../model/user.model.js";
 import { v4 as uuidv4 } from "uuid";
 import { setuser } from "../utils/auth.js";
const singnupController=async (req,res)=>{
    const {name,email,password}=req.body;

    const user=await User.create({
        name,
        email,
        password
    })

    return res.redirect("/")
}
const loginController=async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({
        email,
        password
    })
    if(!user)
        return res.render("login",{
            error:"email or password are incorect"
        })

        const token=setuser(user)
        // console.log(userp);
        // res.cookie("uid",token)
        return res.json({token})
}
export {singnupController,loginController}