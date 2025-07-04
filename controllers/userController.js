const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Register
const registerController = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        //validation
        if(!username || !email || !password){
            return res.status(500).send({
                success: false,
                message: 'Please provide all fields'
            })
        }
        //check existing users
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(500).send({
                success: false,
                message: 'User already exist'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        //save user
        const newUser = new userModel({username, email, password:hashPassword})
        await newUser.save()

        res.status(201).send({
            success:true,
            message: 'User registered successfully'
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Register API',
            error
        })
    }
}

//Login
const loginController = async (req, res) => {
    try{
        const {email, password} = req.body
        //find user
        const user = await userModel.findOne({email});
        //validation
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        //match password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(500).send({
                success: false,
                message: 'Incorrect credential' 
            })
        }
        //token
        const token = await jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn: '1d'});
        res.status(200).send({
            success: true,
            message: 'Login successfully',
            token,
            user:{
                id: user._id,
                email: user.email,
                username: user.username
            }
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Login api',
            error
        })
    }
};

module.exports = {registerController, loginController};