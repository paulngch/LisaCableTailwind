require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path")
const mongoose = require("mongoose");
import authRoutes from "./routes/auth.js";
import createRoutes from "./routes/create.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Import
const usersController = require("./controllers/usersController.js");


//MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/users", usersController);
app.use("/auth", authRoutes);
app.use("/create". createRoutes);

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

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("..", "client", "dist", "index.html"));
// });

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
