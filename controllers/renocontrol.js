let express= require('express')
let router= express.Router()
 let mongoose = require('mongoose');

router.get('/new/subscribe',(req,res)=>{
    
    res.render('subscribe.ejs',{
        tabTitle:'Subscribe',
    })
})
router.get('/contact',(req,res)=>{
    res.render('contact.ejs',{
        tabTitle:'Contacts'
    })
    

})

router.get('/reviews',(req,res)=>{
    res.render('testimonial.ejs',{
        tabTitle:'Testimonial'
    })

})







module.exports=router