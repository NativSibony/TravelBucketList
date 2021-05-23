const path = require("path");
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const Location = require("./db/mongoose");
const multer = require("multer");
const upload = multer({ dest: "public/img" });
const locations = require("./utils/locations");
const { unlink } = require("fs");

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicPath = path.join(__dirname, "../public");
// const upload = multer({ dest: publicPath + "/img" });

const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicPath));

// Setup body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("", (req, res) => {
  res.render("index", { title: "Index", active: "index" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", active: "about" });
});

app.get("/addLocation", (req, res) => {
  res.render("addLocation", { title: "Add Location", active: "addLocation" });
});

app.get("/remove", (req, res) => {
  const loc = req.query.loc;
  const src = req.query.src;
  locations.removeLocation(loc);
  unlink("public/" + src, (err) => {
    if (err) throw err;
  });
  console.log(loc);
  Location.deleteOne({ location: loc }, (err, res) => {
    if (err) return console.log(err);
    console.log(res);
  });
  setTimeout(() => {
    res.redirect("/");
  }, 1000);
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Page Not Found!",
  });
});

app.post("/location", upload.single("fileName"), (req, res, next) => {
  const { location, description } = req.body;
  const { path } = req.file;
  const src = path.replace("public", "");
  const rem = true;
  const obj = {
    location,
    description,
    src,
    rem,
  };
  locations.addLocation(location, obj);
  const data = new Location(obj);
  data.save().catch((err) => {
    if (err) throw err;
  });
  setTimeout(() => {
    res.redirect("/");
  }, 1000);
});

hbs.registerHelper("isEqual", function (s1, s2) {
  return s1 === s2;
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
