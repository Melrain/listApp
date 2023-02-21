//jshinde es6

const express = require("express");

const bodyparser = require("body-parser");

const app = express();

var items = ["buy food","cook food","eat food"];

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();

  let options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit" };

  var day = today.toLocaleDateString("cn-zh",options);

  res.render("list", { kindOfDay: day, newItem:items });
});

app.post("/",(req,res)=>{
  item = req.body.playerInput;
  items.push(item);
  console.log(item);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("服务器已启动,端口3000");
});
