
const User = require('../model/user');


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