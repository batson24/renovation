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
  
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
     User.create(req.body, (err, createdUser) => {
  
  console.log('user is created', createdUser)
      res.render('./sessions/profile.ejs',{
        user: createdUser,
        tabTitle:'Signup',
        login: req.session.login
     })
     })
  })



module.exports=users