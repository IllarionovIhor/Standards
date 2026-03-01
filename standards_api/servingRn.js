
// front should handle notifications


const express = require('express');
const nodemailer = require('nodemailer');
const key = "3d70f27ec4bacecb99701f788cbf3fa8";
const city = "Zhytomyr";
const cors = require("cors");

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
const port = 3000;
// let user;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// endpoint login

app.get('/weather', async (req, res) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    let weather = await response.json();
  res.send(weather);
});


// endpoint send stuff
app.post('/send', (req, res) => {
    console.log("yay", req.body);
    const user = req.body.user;
    const pass = req.body.pass;
    const receiver = req.body.receiver;
    const subject = req.body.subject || 'Node mail';
    const text = req.body.text || 'Node text';

    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        // user: 'krestonosets2@gmail.com',
        // pass: 'riam nbng ifrp qrbt'
        user,
        pass
    }
    });

    const mailOptions = {
        // from: 'krestonosets2@gmail.com',
        from: user, // Use the user email from the request
        // to: 'krestonosets2@gmail.com',
        to: receiver, // Use the receiver email from the request
        // subject: 'Sending Email using Node.js',
        subject, // Use the subject from the request
        // text: 'That was easy!'
        text // Use the text from the request
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    }); 
    res.send('email sent!'); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

