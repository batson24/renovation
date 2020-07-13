let express= require('express')
let router= express.Router()
 let mongoose = require('mongoose');
 let Contact= require('../models/contact.js')
 




router.get('/new',(req,res)=>{
    res.render('./contact.ejs',{
        tabTitle:'Contact',
     login: req.session.login
    })
    

})


router.post('/', (req,res)=>{
    
     Contact.create(req.body, (err, createdInquiry) => {
        console.log( createdInquiry)
        res.render('./contact.ejs',{
            tabTitle:'Contact',
            login: req.session.login
            
            
         })
       
     })
    })








module.exports=router