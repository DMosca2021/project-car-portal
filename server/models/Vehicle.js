const mongoose = require("mongoose");

const { Schema } = mongoose;

const vehicleSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  trimLvl: {
    type: String,
    trim: true,
  },
  engineDisp: {
    type: Number,
  },
  transaction: {
    type: Schema.Types.ObjectId,
    ref: "Transaction",
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
