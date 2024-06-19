import { Uri } from "../model/url.model.js";
 import { nanoid } from "nanoid";

const shortidgenerateController=async (req,res)=>{
   const ur=req.body;
     console.log(ur);
     
    if(!ur.url) return res.status(400).json({err:"uri not found"});
 
     const shortId=nanoid(8);
     await Uri.create({
         shortid:shortId,
         redirect:ur.url,
         watchhistory:[]
     });
     return res.status(200).json({id:shortId})
 
   
    }
    //  const redirecturlcontroller=async (req,res)=>{
    //     const url=req.param.shortId;
    //     const uri=await Uri.findOneAndUpdate({url},{
    //         $push:{
    //             watchhistory:{
    //                 timestamps:Date.now()
    //             }
    //         }
    //     })
    //     res.redirect(uri.redirect);
    //     // return res.status(200).json({msg:"sucess"})
    //  }
     
  const handleanlitics=async(req,res)=>{
    const sh=req.params.shortid;
    const result=await Uri.findOne({shortid:sh})
    return res.json({totalclick:result.watchhistory.length,anlytics:result.watchhistory})

  }
export {shortidgenerateController,
    handleanlitics
    // redirecturlcontroller
};