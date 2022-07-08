const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
 res.render("home", {});
})








app.listen(3000, function (){
 console.log("Server started on port 3000");
})