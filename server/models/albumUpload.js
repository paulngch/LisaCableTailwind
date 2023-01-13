const mongoose = require("mongoose");

const albumUploadSchema = new mongoose.Schema(
  {
    name: { type: String}, // trim
    description: { type: String, required: true}, // trim,
    //learn to upload picture? && add URL
    colorTheme: { type: String }, //trim (e.g. White-Brown)
    cableType: { type: String, required: true}, // TAG for SEARCH FUNCTION, (from from dropdown, Braid / Straight)
    deviceType: { type: String, required: true}, // TAG for SEARCH FUNCTION, (from from dropdown, TRRS / USB)
    connectorType: { type: String, required: true }, // TAG for SEARCH FUNCTION, (e.g. from FEMO/GX, or NIL)

  },
  { timestamps: true }
);

const Booking = mongoose.model("AlbumUpload", albumUploadSchema);

module.exports = AlbumUpload;
