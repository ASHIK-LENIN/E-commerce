const express = require('express');

const { upload } = require('../multer');

const User = require('../Model/Users');
const ErrorHandler = require('../utils/ErrorHandler');
const path = require('path');
const fs = require('fs')
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post('/create-user', upload.single('file'), async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email: email });
        if (userEmail) {
            const fileName = req.file.filename;
            const filePath = `uploads/${fileName}`
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ message: 'Error Deleting File' })
                } else {
                    res.json({ message: 'File deleted successfully' })
                }
            })

            return next(new ErrorHandler('User already exists', 400));
        }
        const filename = req.file.filename;
        const fileUrl = path.join(filename);


        const user = {
            name: name,
            email: email,
            password: password,
            avatar: fileUrl,
        };

        // const newUser = await User.create(user);
        // res.status(201).json({
        //     success: true,
        //     newUser: newUser,
        // });

        const activationToken = createActivationtoken(user);
        const activationUrl = `http://localhost:5173/activation/${activationToken}`

        try {
            
        } catch (err) {
            return next(new ErrorHandler(err.message, 500))
        }
    } catch (err) {
        return next(new ErrorHandler(err.message, 400))
    }

});

const createActivationtoken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRECT_KEY,{
        expiresIn: '5m'
    });
}

module.exports = router;