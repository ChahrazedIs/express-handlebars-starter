const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const exphbs = require("express-handlebars");



//=================================================
//        Set up a public folder
//=================================================
app.use(express.static(path.join(__dirname, "/public")));


//=================================================
//        Set up handlebars
//=================================================

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//=================================================
//        Routes
//=================================================
app.get("/", (req, res) => {
  res.render("index");
});



//=================================================
//        Start the server
//=================================================
app.listen(port, () => {
  console.log(` Server running on port ${port} `);
});
