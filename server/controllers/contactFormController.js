const express = require("express");
const router = express.Router();
require("dotenv").config();

const ContactForm = require("../models/contactForm");

//===============================
//Uploading (POST) contactForm to mongoDB
router.post("/", async (req, res) => {
  // console.log("req.body", req.body);
  try {
    //creating form from schema, sending to mongoDB
    const contactForm = await ContactForm.create(req.body);
    res.status(201).json(contactForm);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//===============================
//Retrieving (GET) contactForm to mongoDB
router.get("/", async (req, res) => {
  // console.log("req.body", req.body);
  // console.log("RES", res);
  // return res.json(res)
  try {
    // creating form from schema, sending to mongoDB
    const contactList = await ContactForm.find().exec();
    res.status(201).json(contactList);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
