
const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set the  view engine
app.set('view engine','ejs');
app.set('views','./views');

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



