const app = require('./App');
const connectDatabase = require('./DB/Database');



//handling uncaught errors [process.on identify events or uncaught expception (middleware fn)]
process.on('uncaughtException',(err)=>{
console.log(`Error : ${err.message}`);
console.log('shutting down the server for handling uncaught exception');
});


//config
if(process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({
        path: 'Config/.env'
    })
}

//connect Database
connectDatabase();

//create server
const server = app.listen(process.env.
    PORT, () =>{
        console.log(`server is running on http://localhost:${process.env.PORT}`);
    });

   
    //unhandled promise rejection
    process.on('unhandledRejection',(err)=>{
        console.log(`shutting down the server for ${err.message}`);
        console.log('shutting down the servre for unhandled promise rejection');

    //server crush prevent on  deploy [ 1 is a error status code]
     server.close(() => {
        process.exit(1);
    });
    });

   
