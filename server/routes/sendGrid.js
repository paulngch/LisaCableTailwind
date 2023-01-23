const path = require("path");
const sgMail = require("@sendgrid/mail");
const express = require("express");
const app = express();
const router = express.Router()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// app.route("/").get(function (req, res) {
//   res.sendFile(path.join(__dirname, "/form.html"));
// });

// app.post("/", (req, res) => {
//   console.log(req);
//   const msg = {
//     to: `2Payment@protonmail.com`, // recipient
//     from: "2Payment@protonmail.com", //verified sender
//     subject: req.body.subject,
//     text: `Message from ${req.body.email}:\n${req.body.message}`,
//   };
//   try {
//     sgMail.send(msg);
//     res.send("Message Successfully Sent!");
//   } catch (error) {
//     res.send("Message Could not be Sent");
//   }
// });

const msg = {
    to: `2Payment@protonmail.com`, // recipient
    from: "2Payment@protonmail.com", //verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }



module.exports = router;