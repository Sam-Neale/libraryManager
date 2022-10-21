//@ts-check

//Dependancies

const express = require("express");
const path = require("path");
const XMLConvert = require('xml-js');
const fs = require("fs");

console.log(path.join(__dirname, '/public'));

//Express
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/../', 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(path.join(__dirname, '/../public')));
app.listen(3000);

//Routes
app.get("*", (req,res)=>{
  switch(req.path){
    case "/":
      res.render("index");
      break;
    default:
      res.render("404");
  }
})

app.post

const demoObject = [
  {
    option: 1
  },
  {
    option: 2
  }
]

const XMLOptions = { compact: true, ignoreComment: true, spaces: 4 };
const result = XMLConvert.json2xml(JSON.stringify(demoObject), XMLOptions);
console.log(result);