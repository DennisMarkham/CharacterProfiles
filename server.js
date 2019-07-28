var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Non-handlebars version
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//****************

//handlebars version
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//*****************

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


var characters = [
{
name: "Mordecia",
style: "body {background-color: blue;}",
species: "bluejay"
}, 
{name: "Rigby",
style: "body {background-color: brown;}",
species: "raccoon"
},
{name: "Benson",
style: "body {background-color: red;}",
species: "gumball machine" 
}
];

app.get("/", function(req, res){

  var list = "";

  for (var i = 0; i < characters.length; i++)
  {
    list += "<a href = 'localhost:3000/" + characters[i].name.toLowerCase + "'>" + 
    characters[i].name + "</a><br>";
  }

  return res.send(list);
})


app.get("/:characters?", function(req, res) {
  var chosen = req.params.characters;


  // NON-HANDLEBARS VERSION
  // if (chosen) {
  //   console.log(chosen);

  //   for (var i = 0; i < characters.length; i++) {
  //     if (chosen.toLowerCase() === characters[i].name.toLowerCase()) {
  //        var html = "<head> <style>" + characters[i].style + "</style> </head> <body>"
  //        html += "<h1>" + characters[i].name + "</h1></body>";
  //       return res.send(html);
  //     }
  //   }
  //   //not sure what this does
  //   return res.json(false);
  // }
  // return res.json(characters);
  //**************

//HANDLE BARS VERSION  
if (chosen)
{
  for (var i = 0; i < characters.length; i++) {
      if (chosen.toLowerCase() === characters[i].name.toLowerCase()) {
         
        return res.render("character", characters[i]);
      }
    }
}
//*************
});