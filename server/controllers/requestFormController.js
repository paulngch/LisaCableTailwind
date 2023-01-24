const express = require("express");
const router = express.Router();
require("dotenv").config();

const RequestForm = require("../models/requestForm");

//===============================
//Uploading (POST) requestForm to mongoDB
router.post("/", async (req, res) => {
  console.log("req.body", req.body);
  try {
    //creating form from schema, sending to mongoDB
    const requestForm = await RequestForm.create(req.body);
    res.status(201).json(requestForm);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;