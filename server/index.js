//@ts-check

//Dependancies

const express = require("express");
const path = require("path");

//Express
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/../', 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(3000);

app.get("*", (req,res)=>{
  switch(req.path){
    case "/":
      res.render("index");
      break;
    default:
      res.render("404");
  }
})