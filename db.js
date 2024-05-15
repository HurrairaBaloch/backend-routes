require("dotenv").config() // load .env variables
const mongoose = require("mongoose") //import fresh mongoose object

const {DATABASE_URL} = process.env 

mongoose.connect = mongoose.connect("mongodb+srv://hurairabaloch996:Huraira@cluster0.23sonw2.mongodb.net/AounDb", {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection
.on("open", () => console.log("DATABASE STATE", "Connection Open"))
.on("close", () => console.log("DATABASE STATE", "Connection Open"))
.on("error", (error) => console.error("DATABASE STATE", error))

module.exports = mongoose