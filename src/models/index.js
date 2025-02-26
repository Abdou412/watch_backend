const mongoose = require("mongoose");

const watchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
  },
  imgURL: {
    type: String,
  },
  buyLink: {
    type: String,
    
  },
});

const Watch = mongoose.model("Watch", watchSchema);

module.exports = Watch;
