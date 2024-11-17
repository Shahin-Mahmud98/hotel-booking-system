const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
    },
    desc: {
        type: String,
        required:true,
    },
    img: [{
        type: String,
        
    }],
    roomNumbers: {
        type: [
          {
            number: Number,
            unavailableDates: [Date],
          },
        ],
      },

});
module.exports = mongoose.model("Room",roomSchema);


//chatgpt

