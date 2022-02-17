const express = require("express")
const { registerUser, userLogin } = require("../controllers/user.controller")

const Router = express.Router()

Router.post('/register', registerUser)

Router.post('/login', userLogin)

module.exports = Router