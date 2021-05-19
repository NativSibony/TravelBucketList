const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/locations", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Location = mongoose.model("Location", {
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  rem: {
    type: Boolean,
    required: true,
  },
});

module.exports = Location;
