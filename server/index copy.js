const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")
var smtpTransport = require('nodemailer-smtp-transport');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(cors())


app.post("/api/v1/send-email", cors(), async (req, res) => {
    let { text } = req.body
    const transport = nodemailer.createTransport(smtpTransport({
        service: "gmail",
        host: "smtp@gmail.com",
        auth: {
            user: "akshaymewara70@gmail.com",
            pass: "ak1234me"
        }
    }))

    var mailOptions = {
        from: "akshaymewara70@gmail.com",
        to: "akshaymewara70@gmail.com",
        subject: "first email",
        html: { text }
    }

    await transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.sendStatus(200);
        }
    });
});


app.listen(process.env.PORT || 4000, () => {
    console.log("server is alive on port 4000")
})