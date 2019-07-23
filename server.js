var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


var characters = [
{
name: "Mordecia",
style: "body {background-color: blue;}"
}, 
{name: "Rigby",
style: "body {background-color: brown;}"
},
{name: "Benson",
style: "body {background-color: red;}"}
];

app.get("/:characters?", function(req, res) {
  var chosen = req.params.characters;



  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen.toLowerCase() === characters[i].name.toLowerCase()) {
         var html = "<head> <style>" + characters[i].style + "</style> </head> <body>"
         html += "<h1>" + characters[i].name + "</h1></body>";
        return res.send(html);
      }
    }
    //not sure what this does
    return res.json(false);
  }
  return res.json(characters);
});