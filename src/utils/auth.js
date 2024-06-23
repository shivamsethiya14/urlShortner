const sessionidusermap=new Map()
function setuser(id,user){
    sessionidusermap.set(id,user)
}
function getUser(id){
    return sessionidusermap.get(id);
}
export
  {  setuser,
    getUser}
