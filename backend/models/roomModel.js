const mongoose = require("mongoose");

const roomNumberSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  unavailableDates: { type: [Date], default: [] }, // Array of dates
});

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  roomNumbers: [roomNumberSchema], // Array of subdocuments
  img: { type: [String], default: [] },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
