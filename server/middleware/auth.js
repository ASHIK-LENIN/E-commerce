const User = require('../Model/Users')
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('./catchAsyncError');
const jwt = require("jsonwebtoken");



//Function to verify jwt token

exports.isAuthenticated = catchAsyncError(async(req, res, next) =>{
    const { token } = req.cookies;

    if(!token){
        return next(new ErrorHandler('Please login to continue', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRECT_KEY);
    req.user = await User.findById(decoded.id);
    next();
})