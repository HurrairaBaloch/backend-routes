require("dotenv").config() // load .env variables
const mongoose = require("mongoose") //import fresh mongoose object

const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://card61345:9ZdMlvjNiuiOYXoq@cluster0.dyvp4rr.mongodb.net/StandardBankDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      mongoose.connection
        .on("open", () => console.log("DATABASE STATE", "Connection Open"))
        .on("close", () => console.log("DATABASE STATE", "Connection Closed"))
        .on("error", (error) => console.error("DATABASE STATE", error));
        
      console.log("DATABASE CONNECTION SUCCESSFUL");
    } catch (error) {
      console.error("DATABASE CONNECTION ERROR", error);
      process.exit(1); // Exit process with failure
    }
  };
  
  module.exports = connectDB;