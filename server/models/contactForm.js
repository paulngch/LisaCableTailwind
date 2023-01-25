const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      index: true,
    },
    feedback: { type: String, enum: ["Request", "Feedback"] },
    message: { type: String, trim: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

module.exports = ContactForm;
