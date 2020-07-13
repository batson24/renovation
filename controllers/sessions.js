let bcrypt = require('bcrypt')
let express = require('express')
let sessions = express.Router()
let User = require('../models/users.js')




sessions.get('/new', (req,res)=>{
    
    res.render('./sessions/new.ejs',{
        login: req.session.login,
    tabTitle:'Login'
    
    })
})


sessions.post('/', (req,res)=>{
 User.findOne({ username: req.body.username }, (err, foundUser) => {
     
    if (err) {
      console.log(err)
      res.send('oops the db had a problem')
    } else if (!foundUser) {
     req.session.destroy
     
        
    } else {
      
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        
        console.log('see if found user', foundUser)
        req.session.login = foundUser
   
        console.log('here',req.session.login)
        //res.render('./sessions/profile.ejs',{
         // tabTitle:'Login',
          
        //  user:foundUser
      //  })
      res.redirect('/')
      } else {
       
        res.send('<a href="/"> password does not match </a>')
      }
    }
  })
})
sessions.get('/', (req, res) => {
  
  req.session.destroy(()=>{

    res.redirect('/profile')
  })
})
  



module.exports= sessions