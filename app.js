const express = require('express')
const path = require("path")
require('dotenv').config()
const ejs= require('ejs')
const expressLayouts = require('express-ejs-layouts');
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const Sequelize = require('sequelize')
const sequelize = require('./Models/db.connect')
const users = require('./Models/db/users')
const expressSession = require('express-session')

// PORT
const PORT = process.env.PORT

// Create express app
const app = express()

app.set('views' , path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public/'));

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(expressSession({
    secret: process.env.SECRET,
    resave: false,
    name: process.env.NAME,
    saveUninitialized: true,
    cookie: {}
}))

// Default routes
app.use('/', userRoutes)
app.use(expressLayouts)
// Admin routes
app.use('/admin', adminRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`);
})