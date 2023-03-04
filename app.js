const express = require("express");
const path = require("path");

const { format } = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.get("/index", (req, res) => {
    res.render("index");
  });

app.get("/about", (req, res) => {
    res.render("about");
  });
  
  app.get("/service", (req, res) => {
    res.render("service");
  });
    
  app.get("/contact-2", (req, res) => {
    res.render("contact-2");
  });









  app.listen(8080, () => {
    console.log(`Example app listening at http://localhost:${8080}`)
  })
  