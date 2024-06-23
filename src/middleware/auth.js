import { getUser } from "../utils/auth.js"

const restrictloginuser=async(req,res,next)=>{
    console.log(req.cookies);
    const useruuid=req.cookies.uid;
    if (!useruuid) {
        return res.redirect("/login")
    }
    const user =getUser(useruuid);
    console.log(user);
    if(!user) return res.redirect("/login")

    req.user=user;
    next()
}
const checkAuth=async(req,res,next)=>{
    const useruuid=req.cookies.uid;
    // if (!useruuid) {
    //     return res.redirect("/login")
    // }
    const user =getUser(useruuid);
    // console.log(user);
    // if(!user) return res.redirect("/login")

    req.user=user;
    next()
}
export {restrictloginuser,checkAuth}