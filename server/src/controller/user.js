const express = require('express');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const Users = require('../models/users');
const message = require('../utility/status')
const logger = require('../utility/logger');

exports.signup = async (req, res) => {
    try {

        const addingUsersRecords = new Users(req.body);
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(req.body.password), 'secret key 123').toString();
        logger.info(ciphertext);
        addingUsersRecords.password = ciphertext;
        const insertUsers = await addingUsersRecords.save();
        res.status(message.CREATED).send(insertUsers);
    }
    catch (e) {
        res.status(message.BAD_REQUEST).send(e);
    }
}

exports.signin = async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await Users.findOne({ email: email });
        var ciphertext = userEmail.password;
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        var accessToken = jwt.sign(email , "helloworldthisisjsonwebtoken")
        const passwordOne = JSON.stringify(password);
        if (originalText === passwordOne) {
            res.status(200).send(accessToken);
            // console.log(userEmail);
            logger.info(accessToken);
        }
            else {
            return res.status(400).send("wrong password");
        }
    }
    catch (error) {
        res.status(message.BAD_REQUEST).send("Invalid Email");
    }
}