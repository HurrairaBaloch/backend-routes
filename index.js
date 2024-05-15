require("dotenv").config(); // load .env variables
const express = require("express"); // import express
const { Router } = require("express"); // import router from express
const User = require("./userSchema/userSchema.js"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens
const cors = require("cors"); // import cors

// DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const { PORT = 3000 } = process.env;

// Create Application Object
const app = express();
app.use(express.urlencoded({ extended: true }));

// GLOBAL MIDDLEWARE
app.use(cors()); // add cors headers
app.use(express.json()); // parse json bodies

// ROUTES AND ROUTES
app.get("/", (req, res) => {
  res.send("this is the test route to make sure server is working");
});
app.get("/about", (req, res) => {
  res.send("this is the about page");
});
app.post("/signup", async (req, res) => {
  try {
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // create a new user
    const user = await User.create(req.body);
    res.status(201).json({
      message: 'User created successfully',
      progress: "website is under construction",
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// APP LISTENER
app.listen(PORT, () => console.log("SERVER STATUS", `Listening on port ${PORT}`));
