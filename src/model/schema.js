const mongoose = require("mongoose");

const { Schema } = mongoose;

const measurementSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
      min: 0,
    },
    chest: {
      type: Number,
      required: true,
      min: 0,
    },
    leftBicep: {
      type: Number,
      required: true,
      min: 0,
    },
    rightBicep: {
      type: Number,
      required: true,
      min: 0,
    },
    waist: {
      type: Number,
      required: true,
      min: 0,
    },
    leftThigh: {
      type: Number,
      required: true,
      min: 0,
    },
    rightThigh: {
      type: Number,
      required: true,
      min: 0,
    },
    leftCalf: {
      type: Number,
      required: true,
      min: 0,
    },
    rightCalf: {
      type: Number,
      required: true,
      min: 0,
    }
  },
  {
    timestamps: true,
  }
);

const Measurement = mongoose.model("Measurement", measurementSchema);

module.exports = Measurement;
