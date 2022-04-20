const express = require("express");
const app = express();
require("dotenv").config();

// const bodyParser = require("body-parser");
const cors = require("cors")
const nodemailer = require("nodemailer")
var smtpTransport = require('nodemailer-smtp-transport');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors());


app.post("/api/v1/send-email",(req, res) => {
    let { text } = req.body
    const transporter = nodemailer.createTransport(smtpTransport({
        service: "gmail",
        host: "smtp@gmail.com",
        auth: {
            user: "akshaymewara70@gmail.com",
            pass: "ak1234me"
        }
    }));

    var mailOptions = {
        from: "akshaymewara70@gmail.com",
        to: "akshaymewara70@gmail.com",
        subject: "first email",
        html: `${text}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.sendStatus(200);
        }
    });
});


app.listen(4000, () => {
    console.log("server is alive on port 4000")
})