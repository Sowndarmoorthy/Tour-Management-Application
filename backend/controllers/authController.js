const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    register: async (req, res) => {
        try {
           
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password,salt)

            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                photo: req.body.photo
            });
            
            await newUser.save();
            res.status(200).json({ success: true, message: "Successfully created" });
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: "Failed to create. Try again" });
        }
    },

    login: async (req, res) => {
            const email = req.body.email
        try {
            const user = await User.findOne({email})

            if(!user){
                return res.status(404).json({success:false,message:"User Not Found!"})
            }

            const checkCorrectPassword = await bcrypt.compare(req.body.password,user.password)

            if(!checkCorrectPassword){
                return res.status(401).json({success:false,message:"Incorrect Email or password"});
            }
            const {password,role, ...rest} = user._doc;

            const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn:'15d'}
            );

            res.cookie("accessToken",token,{
                httpOnly:true,
                secure: true, // Set to true if you're using HTTPS
                expires:token.expiresIn
            }).status(200).json({success:true , message:"Successfully login",
                token,
                data:{ ...rest},
                role,
            });
            
        } catch (error) {
            res.status(500).json({ success: false, message: "Login failed. Try again" });
        }
    }
};

