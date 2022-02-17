require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const user = require('./routes/user')


const app = express()

app.use(express.json())

app.use("/user", user)

connectDB()

const PORT = process.env.PORT || process.env.port
app.listen(PORT, err => {
    err ? console.log("Server failed", err)
        : console.log(`Server is runnning on port ${PORT}`)
})