class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor) // to pass error to captureStacktrace
    }    
}

module.exports = ErrorHandler;