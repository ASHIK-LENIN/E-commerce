const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500

    err.message = err.message || 'Internal Server Error'


    //duplicate key Error [ error objects extracts the error status code ]

if(err.code === 11000){
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
}


// Wrong JWT

if(err.name === 'JsonWebTokenError'){
    const message = `Your Url is invalid`;
    err = new ErrorHandler(message, 400);
}

// JWT expired

if(err.name === 'TokenExpiredError'){
    const message = `Your Url is invalid`;
    err = new ErrorHandler(message, 400);
}
res.status(err.status).json({
    success: false,
    message : err.message,
});

}

