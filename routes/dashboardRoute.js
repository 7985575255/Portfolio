const express= require('express')

//router object
const router=express.Router();


router.get('/',(req,res)=>{
    res.render("dashboard")
  })


module.exports=router;