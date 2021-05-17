const path = require("path");
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const Location = require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicPath));

// Setup body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("", (req, res) => {
  res.render("index", { title: "Index", active: "index" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", active: "about" });
});

app.get("/addLocation", (req, res) => {
  res.render("addLocation", { title: "Add Location", active: "addLocation" });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Page Not Found!",
  });
});

app.post("/location", (req, res) => {
  const { location, description } = req.body;
  // console.log(imageSRC, imageID);
  // const data = new Location({
  //   location,
  //   description,
  //   imageID,
  //   imageSRC,
  // });
  // data
  //   .save()
  //   .then(() => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log("Error", err);
  //   });
  setTimeout(() => {
    res.redirect("/");
  }, 2000);
});

hbs.registerHelper("isEqual", function (s1, s2) {
  return s1 === s2;
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
