const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("/stuff", function(req, res) {
	db.Test.findAll()
	.then(function(dbBurger) {
		console.log(dbBurger);
		res.send(dbBurger);
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT);
});