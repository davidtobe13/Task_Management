const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')
// require('dotenv').config()
const authorization = async (req, res, next) => {
    try{
        const auth = req.headers.authorization;

        if(!auth){
            return res.status(404).json({
                message: 'No authorization token found'
            })
        }

        const token = auth.split(' ')[1];

        if(!token){
            return res.status(404).json({
                message: `Aurhorization failed`
            })
        }

        const decodedToken = jwt.verify(token, process.env.secret);

        const user = await userModel.findById(decodedToken.userId)

        
        if(!user){
            return res.status(404).json({
                message: `Aurhorization failed: User not found`
            });
        }

        req.user = decodedToken

        next()
    }catch(err){

        if(err instanceof jwt.JsonWebTokenError){
            return res.status(500).json({
                message: `This user is signed out`
            })
        }
        res.status(500).json({
            message: err.message
        })
    }
};

module.exports = authorization