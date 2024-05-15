require("dotenv").config() // load .env variables
const express = require("express") // import express
const mongoose=require('./db.js')
const cors = require("cors") // import cors
const UserRouter = require("./controllers/login.controller.js")
//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const {PORT = 3000} = process.env

// Create Application Object
const app = express()
app.use(express.urlencoded({ extended: true })); 

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(express.json()) // parse json bodies

app.use("/api/", UserRouter)
// ROUTES AND ROUTES
app.get("/", (req, res) => {
    res.send("this is the test route to make sure server is working")
})

// APP LISTENER
app.listen(PORT, () => console.log("SERVER STATUS", `Listening on port ${PORT}`))