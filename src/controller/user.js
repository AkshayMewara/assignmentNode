const express = require('express');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const Users = require('../models/users');
const message = require('../utility/status');
const logger = require('../utility/logger');

exports.signup = async (req, res) => {
    try {

        const addingUsersRecords = new Users(req.body);
        // console.log(req.body);

        // crypto check 
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(req.body.password), 'secret key 123').toString();

        console.log(ciphertext);



        addingUsersRecords.password = ciphertext;


        const insertUsers = await addingUsersRecords.save();
        res.status(message.CREATED).send(insertUsers);
        // }
    }
    catch (e) {
        res.status(message.BAD_REQUEST).send(e);
    }
}

exports.signin = async (req, res) => {
    try {

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await Users.findOne({ email: email });
        var ciphertext = userEmail.password;
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);

        var accessToken = jwt.sign(name , "helloworldthisisjsonwebtoken")

        const passwordOne = JSON.stringify(password);
        if (originalText === passwordOne) {

            res.send(accessToken);
            // console.log(userEmail);
            logger.info(accessToken);
        } else {
            res.send("wrong password");
        }
    }
    catch (error) {
        res.status(message.BAD_REQUEST).send("Invalid Email");
    }

}