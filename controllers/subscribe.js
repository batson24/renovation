let express= require('express')
let subscribe= express.Router()
 let mongoose = require('mongoose');
 let Subscribe= require('../models/subscribe.js')
 let User= require('../models/users.js')




subscribe.get('/new',(req,res)=>{
    
    res.render('subscribe.ejs',{
        tabTitle:'Subscribe',
       login: req.session.login
    })
}) 


/*
subscribe.post('/', (req,res)=>{
    
    Contact.create(req.body, (err, createdInquiry) => {
       console.log( createdInquiry)
       res.render('./contact.ejs',{
           tabTitle:'Contact',
           login: req.session.currentUser
           
           
        })
      
    })
   })*/


   module.exports= subscribe