var nodemailer = require('nodemailer');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var tarnsport = nodemailer.createTransport(
    {
        host :'smtp.gmail.com',
        port : 587,
        secure : false,
        requireTLS : true,
        auth :{
            user : 'tanumoy.visiabletech@gmail.com',
            pass : 'tanumoy@123'
        }
    }
);
var mailOption = {
    from : 'tanumoy.paul@gmail.com',
    to : 'visiabletech@gmail.com',
    subject : 'Test Mail',
    text : 'Hello It is test mail'
}
tarnsport.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }else {
        console.log("Mail sent succesfuly",info.response)
    }
})