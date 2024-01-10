
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./../model/user');

//authentication using passport

passport.use(new LocalStrategy({
     usernameField:'email',
     passReqToCallback:true
},
function(req,email,password,done){

     //find the user and establish the identity

     User.findOne({email:email})
     .then((user)=>{
         if(!user || user.password != password){
             console.log('Error Invalid Username/Password');
             return done(null,false);
         }

         return done(null,user);
     })
     .catch((err)=>{
         console.log(err);
             return done(err);    
     })

}     

))

//serializing to user decide which key is to kept in cookie
passport.serializeUser(function(user,done){
    
     return done(null,user.id);

});
//deserializer the user cookie
passport.deserializeUser(function(id,done){
    
    User.findById(id)
    .then((user)=>{
         return done(null,user);
    })
    .catch((err)=>{
         console.log("error in finding user --->passport");
         return done(err);
    })

});


//check  the user is authenticated 
passport.checkAuthentication = function(req,res,next){
    
     //if the user is signed in , then  pass on the req to next function which controller next

     if(req.isAuthenticated()){
         return next();
     }

     //user not sign 
     //return to user sign up page

     return res.redirect('/user/login');

}

passport.setAuthenticatedUser = function(req,res,next){
    
     
     if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie we just
        //  sending this to the locals for the views
        res.locals.user = req.user;
     }
     next();
}

