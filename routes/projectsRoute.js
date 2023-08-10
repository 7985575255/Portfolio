const express= require('express')

//router object
const router=express.Router();


router.get('/projects',(req,res)=>{
    res.render("projects")
  })


  
module.exports=router;