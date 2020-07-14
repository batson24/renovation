let express= require('express')
let funding= express.Router()
 let mongoose = require('mongoose');
 let Funding= require('../models/funding.js')






funding.get('/new',(req,res)=>{
    res.render('funding.ejs',{
        tabTitle:'Funding',
       login: req.session.login,

    })
   

})


funding.post('/', (req,res)=>{

  Funding.create(req.body ,(error, createdFunding)=>{
   console.log(createdFunding)
res.redirect('/funding/new')
      


  })
})


 
 /*
 
 app.get('/store/:id/edit', (req, res)=>{
   store.findById(req.params.id, (err, foundProduct)=>{
       res.render('edit.ejs', {
         product: foundProduct, 
         
       })
   })
 })
 
 
 app.put('/store/:id', (req, res)=>{
 
   store.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
     res.redirect('/store/:id');
   })
 })
 
 app.get('/store/:id', (req,res)=>{
 
     res.render('show.ejs',{
         product: newProducts[req.params.id]
     })
 })
 
 app.delete('/store/:id',(req,res)=>{
     store.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
         //res.redirect('/store') //redirect back to fruits index
       })
 
 }) */


module.exports= funding