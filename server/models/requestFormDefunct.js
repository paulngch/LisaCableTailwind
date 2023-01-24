const mongoose = require("mongoose");

const requestFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // trim, name
    discord: { type: String }, //trim
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },

    request: [
      {
        pattern: { type: String, required: true }, // from cableTypes that have pre-determined names; drop-down (e.g. )
        colors: [
          {
            choice1: { type: Schema.Types.ObjectId, ref: "ParacordColor" }, // STORED AS ID //from paracord colors (that have pre-determined names)
            choice2: { type: Schema.Types.ObjectId, ref: "ParacordColor" }, // REFER TO paracordColorUpload Schema
            choice3: { type: Schema.Types.ObjectId, ref: "ParacordColor" },
          },
        ],
        preferredTheme: [{ type: String }], //trim, not required, but helpful for admin to gauge
        usbHost: { type: String, required: true }, // trim (Choose from 2)
        usbDevice: { type: String, required: true }, // trim (Choose from 2)
        connector: { type: String }, //chosen from available types (e.g. FEMO/GX/NIL) , default NIL
        length: { type: Number, required: true }, //in 0.1m steps (indicate to respondee is in Metres), default 1.5m
      },
    ],
  },
  { timestamps: true }
);

const Booking = mongoose.model("RequestForm", requestFormSchema);

module.exports = RequestForm;
