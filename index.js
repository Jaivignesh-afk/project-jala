var express = require('express');
var bodyParser = require('body-parser');
const db = require('./database.js');
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
app.get("/Employee/Create.html",(req,res)=>{
  res.sendFile(__dirname+"/public/Employee/Create.html");
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

 // Adjust the path as needed

async function main() {
  await db.connect();

  const fullname = "Jai";
  const email = "j@gmail.com";
  const phno = 90800;
  const password = "hello";

  //await db.createUser(fullname, email,phno,password);

  //await db.close();
}

main().catch((error) => {
  console.error('Application error:', error);
});