require('dotenv').config()


const express = require("express")


const path = require('path')
const morgan = require('morgan')
const ejsMate = require('ejs-mate')
const ejs = require('ejs')
const Joi = require('joi')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const { getMaxListeners } = require('process');
const nodemailer = require("nodemailer");
const { google } = require('googleapis')
const mongoSanitize = require('express-mongo-sanitize');
const jwt = require('jsonwebtoken')
const puppeteer = require('puppeteer');
const http = require('http')
const { v4: uuid } = require('uuid');
uuid(); 



const app = express();
const server = http.createServer(app);



//db 
const EmailList = require('./models/mailList')






const mongoose = require('mongoose');
const { func } = require("joi")
const { Console } = require('console')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("mongo is working, connection is now open")
    })
    .catch(err => {
        console.log("OH NO ERROR WITH MONGO!!!!")
        console.log(err)
    })



app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

app.use(mongoSanitize());











const sessionOptions = {
    name: 'sid',
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: true,
    cookie: {
        httpOnly: true, //change to secure on deployment
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: + 1000 * 60 * 60 * 24 * 7
    }
}



app.use(session(sessionOptions))
app.use(flash())


app.use((req, res, next) => {
    res.locals.sp = req.flash('rs')
    res.locals.sp = req.flash('err')
    res.locals.ie = req.flash('ie')
    res.locals.se = req.flash('se')
    next();
})


























app.get('/', async (req, res) => {
    return res.render('landing')
  })



  app.get('/terms-and-conditions', async (req, res) => {
    return res.render('terms')
  })

  



app.post('/mail-sign-up', async (req, res) => {
   try{
    console.log(req.body)
   const email = req.body.email
   const allowedCharsEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
   const validEmail = allowedCharsEmail.test(email)
   if(!validEmail){
    req.flash('ie', "invalid email")
    return res.redirect('/')
   }
   const active = await EmailList.findOne({email: email})
   if(active){
    req.flash('ie', "email already in use")
    return res.redirect('/')
   }
   if(validEmail){
    const newEmailList = new EmailList(req.body)
    newEmailList.doc = Date.now()
    await newEmailList.save()
    console.log(newEmailList)
    req.flash('se', "Successfully signed up")
    return res.redirect('/')
   }else{
    req.flash('ie', "invalid email")
    return res.redirect('/')
   }}catch(e){
    req.flash('ie', "invalid email")
    return res.redirect('/')
   }
})





  //all

app.use((req, res) => {
    res.redirect('/')
})

app.use((err, req, res) => {
    res.redirect('/')
})

app.use((err, req, res) => {
    res.redirect('/')
})

app.get('*', (req, res) => {
    res.redirect('/')
})

const PORT = 3000





app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})