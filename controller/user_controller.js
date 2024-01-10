
const User = require('../model/user');


module.exports.profile = function(req,res){
     
    return res.send('<h1>Users dashBroads</h1>');

}


//showing login page  
module.exports.loginPage = function(req,res){

    if (req.isAuthenticated()) {  // fix: use req.isAuthenticated() instead of req.Authenticated()
        return res.redirect('/user/profile');
    }
     return res.render('login',{
         title : 'Login'
     })
    
}
//showing sign-up page for user
module.exports.signUpPage = function(req,res){
     
    if (req.isAuthenticated()) {  // fix: use req.isAuthenticated() instead of req.Authenticated()
        return res.redirect('/user/profile');
    }
     return res.render('sign-up',{
         title:'New User'
     })

}

//user to creating controller
module.exports.createUser = async function (req,res){

    try {
        if (req.body.password !== req.body.conform_password) {
            console.log("Password and conform password do not match");
            return res.status(400).json({
                message: "Password and conform password do not match"
            });
        }

        let user = await User.findOne({ email: req.body.email });

        if (!user) {
            user = await User.create(req.body);
            console.log('User Created:', user);
            return res.status(200).json({
                message: "User created successfully",
                data: user
            });
        } else {
            console.log("User with email id already exists");
            return res.status(400).json({
                message: "Email already exists, please try another"
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }

}

//create user session
module.exports.createSession = function(req,res){
      
    console.log("user signed successfully");
    console.log(req.user);
    const user = req.user;
    return res.status(200).json({
        message: "User login  successfully",
        data: user
    });
}


//implement sign-out function 
module.exports.destroySession = function(req,res){
     
    req.logout(function(err){
         if(err){
             return next(err);
         }

         return res.redirect('/');
    })
    
}




