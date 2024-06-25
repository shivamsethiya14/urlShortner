import jwt from "jsonwebtoken"
const sessionidusermap=new Map()
function setuser(user){
  
  return jwt.sign({
    _id: user._id,
    email:user.email
  },process.env.SECRETKEY)
    // sessionidusermap.set(id,user)
}
function getUser(token){
  if(!token) return  null;
  try {
    return jwt.verify(token,process.env.SECRETKEY)
  } catch (error) {
    return null
  }
  
}
export
  {  setuser,
    getUser}
