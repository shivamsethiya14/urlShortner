import { getUser } from "../utils/auth.js"

const restrictloginuser=async(req,res,next)=>{
    // console.log(req.cookies);
    const useruuid=req.headers["authorization"];
    if (!useruuid) {
        return res.redirect("/login")
    }
    const token =useruuid.split('Bearer ')[1];
    const user =getUser(token);
    // console.log(user);
    if(!user) return res.redirect("/login")

    req.user=user;
    next()
}
const checkAuth=async(req,res,next)=>{
    // const useruuid=req.cookies.uid;
    const useruuid=req.headers["authorization"];
    const token =useruuid.split('Bearer ')[1];
    // if (!useruuid) {
    //     return res.redirect("/login")
    // }
    const user =getUser(token);
    // console.log(user);
    // if(!user) return res.redirect("/login")

    req.user=user;
    next()
}
export {restrictloginuser,checkAuth}