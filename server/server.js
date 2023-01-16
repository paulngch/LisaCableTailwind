require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path")
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

//MONGO
const mongoURI = process.env.SECRET_KEY;
const db = mongoose.connection;
// mongoose.set("runValidators", true); // here is your global setting
// mongoose.set("strictQuery", false);
// mongoose.set("debug", true);
mongoose.connect(mongoURI);

// Connection Error/Success
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("..", "client", "dist", "index.html"));
});

app.get("/api/", (req, res) => {
  res.json({ msg: "Hello World! It's the beginning of something exciting!" });
});

//Listener
db.once("open", () => {
  console.log("connected to mongo", mongoURI);
  app.listen(PORT, () => {
    console.log("listening on port", PORT);
  });
});
