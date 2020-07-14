let bcrypt = require('bcrypt')
let express = require('express')
let users = express.Router()
let User= require('../models/users.js')


users.get('/new', (req,res)=>{
    
    res.render('./users/new.ejs',{
        login: req.session.login,
    tabTitle:'Login'
    
    })
})

users.post('/', (req,res)=>{

    if (req.body.password !== req.body.confirmpassword) {
        let err = new Error('Passwords do not match.');
        res.redirect('/users/new')
       
        console.log(req.body.password)
        console.log(req.body.confirmpassword)
        console.log('passwords dont match')
    }else{
       
  
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    req.body.confirmpassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
     User.create(req.body, (err, createdUser) => {
        req.session.login = createdUser
  console.log('user is created', createdUser)
      res.render('./sessions/profile.ejs',{
        user: createdUser,
        tabTitle:'Signup',
        login: req.session.login
      
     })
    
     })
    }
  })



module.exports=users