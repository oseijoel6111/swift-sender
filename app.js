const express = require('express')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')

// PORT
const PORT = process.env.PORT

// Create express app
const app = express()

// Default routes
app.use('/', userRoutes)

// Admin routes
app.use('/admin', adminRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`);
})