
const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');

app.use(session({
    name:'something',
    //to do change the secret
    secret:'donothing',
    saveUninitialized:false,
    resave :false,
    cookie :{
          maxAge:(1000*60*100)
    }
}));

app.use(express.urlencoded());
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));


app.listen(port , function(err){    
     if(err){
         console.log("Error in running the server");
     }
     console.log("Server is running on port ",port);
});