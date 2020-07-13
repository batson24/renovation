let express= require('express')
let funding= express.Router()
 let mongoose = require('mongoose');
 let Funding= require('../models/funding.js')






funding.get('/new',(req,res)=>{
    res.render('funding.ejs',{
        tabTitle:'Funding',
       login: req.session.login
    })

})


module.exports= funding