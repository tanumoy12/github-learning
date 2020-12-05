const nodemailer = require("nodemailer");
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const express = require("express")
const app = express()
var route = express.Router();
const utils = require('util')
const puppeteer = require('puppeteer')
const hb = require('handlebars')
const readFile = utils.promisify(fs.readFile)


app.use(express.json())

var pdfName = ''

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS, POST, HEAD, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



let transporter = nodemailer.createTransport({
    host: "e2e-57-192.e2enetworks.net.in",
    port: 587,
    secure: false, // true for 465, false for other ports

    auth: {
        user: "leads@avision.co.in", // generated ethereal user
        pass: "&kF4&OPEw#X7", // generated ethereal password
    },
});

app.post('/mail', async(req, res) => {
    console.log("mailing..")
    await transporter.sendMail({
        from: '"Avision " <leads@avision.co.in>',
        to: 'anirban.visiable@gmail.com', //req.body.email,
        subject: "Avision Talent Search Exam Result",
        text: "Thanks for attempting A Vision Talent Search Exam. Wish you all the best of the future, keep your eye on our website for latest updates",
        html: "<b>Thanks for attempting A Vision Talent Search Exam. Wish you all the best of the future, keep your eye on our website <a>avision.co.in</a> for latest updates</b>",
        // attachments: [{
        //     filename: 'file-name.pdf', // <= Here: made sure file name match
        //     path: path.join(__dirname, `./output/${req.body.pdf}`), // <= Here
        //     contentType: 'application/pdf'
        // }]
    }).then(() => {
        res.send("Mail Send")
    }).catch((error) => {
        res.send(error)
    })
})

