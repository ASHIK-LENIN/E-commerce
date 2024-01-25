const express = require('express');
const ErrorHandler = require('./middleware/Error')
const bodyParser = require('body-parser') // read or encode  data from url
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended : true }))

//routes import

const user = require('./Controllers/User');
app.use('/api/v3', user);


//for error handling
app.use(ErrorHandler);

module.exports = app;