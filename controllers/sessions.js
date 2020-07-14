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
        
      res.redirect('/')
      } else {
       
        res.send('<a href="/"> password does not match </a>')
      }
    }
  })
})



sessions.get('/:id/edit', (req, res)=>{
  User.findOne({username:req.session.login.username}, (err, foundUser) => {
      res.render('edit.ejs', {
        user: foundUser,
        tabTitle:'Edit Profile',
         login: req.session.login
        
      })
  })
})



sessions.put('/:id', (req, res)=>{
console.log('update route',req.body)
  User.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
    res.redirect('/sessions/show');
});
})


sessions.get('/show',(req,res)=>{
  
User.findOne({username:req.session.login.username}, (err, foundUser) => {
  
console.log('user is found', foundUser)
res.render('./sessions/profile.ejs',{
  
 user: foundUser,
 tabTitle:'Profile',
  login: req.session.login
})
})

})


sessions.delete('/:id',  (req, res) => {
  User.findOneAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{

    req.session.destroy(()=>{

      res.redirect('/profile')
    })
    
  })
})



sessions.get('/', (req, res) => {
  
  req.session.destroy(()=>{

    res.redirect('/profile')
  })
})
  



module.exports= sessions