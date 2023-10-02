var express = require('express');
var bodyParser = require('body-parser');

const app = express();
/* GET home page. */

app.use(express.static(__dirname+'public'));
app.use(bodyParser.urlencoded({extended: false}));
var email = '';
var password = '';
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/Account/Admin.html",(req,res)=>{
  res.sendFile(__dirname+"/public/Account/Admin.html");
});
app.get("/Account/ForgotPassword.html",(req,res)=>{
  res.sendFile(__dirname+"/public/Account/ForgotPassword.html");
});
app.get("/Home/Index.html",(req,res)=>{
  res.sendFile(__dirname+"/public/Home/Index.html");
});
app.post("/",(req,res)=>{
  email = req.body.email;
  password = req.body.password;
  if(email == "training@jalaacademy.com" && password=="jobprogram"){
    
      res.redirect("/Home/Index.html");
    
  }else{
      res.write("<script language='javascript'>window.alert('You have entered the wrong password/email');window.location.href='/';</script>");
      res.end();
      
  }
});
app.listen(process.env.PORT||3000,()=>{
  console.log("Server is running succesfully");
});

