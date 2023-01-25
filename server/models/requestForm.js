const mongoose = require("mongoose");

const requestFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      index: true,
    },
    contact: { type: Number, required: true, trim: true },
    hostUsb: { type: String, enum: ["A", "C"] },
    deviceUsb: { type: String, enum: ["C", "others"] },
    design: { type: String, enum: ["straight", "braided"] },
    comments: { type: String, trim: true },
    country: { type: String, enum: ["singapore", "international"] },
    discord: { type: String, trim: true },
  },
  { timestamps: true }
);

const RequestForm = mongoose.model("RequestForm", requestFormSchema);

module.exports = RequestForm;
