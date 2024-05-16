require("dotenv").config(); // load .env variables
const express = require("express"); // import express
const { Router } = require("express"); // import router from express
const User = require("./userSchema/userSchema.js"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens
const cors = require("cors"); // import cors
const connectDB = require("./db");
const { PORT = 3000 } = process.env;
connectDB();
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
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(req.body);
    const htmlResponse = `
    <html>
      <head>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f0f0;
          }
          .message-container {
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <div class="message-container">
        <h1>Bem-vindo, ${user.username}</h1>
        <p>O site está em construção</p>
        </div>
      </body>
    </html>
  `;
  res.status(201).send(htmlResponse);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// APP LISTENER
app.listen(PORT, () => console.log("SERVER STATUS", `Listening on port ${PORT}`));
