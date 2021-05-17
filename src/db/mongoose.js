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
  imageID: {
    type: String,
    required: true,
  },
  imageSRC: {
    type: String,
    required: true,
  },
});

module.exports = Location;
// const me = new User({
//   name: "Mike",
//   age: -2,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
