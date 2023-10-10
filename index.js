var express = require('express');
var bodyParser = require('body-parser');
const db = require('./database.js');
const { table } = require('console');
const app = express();
app.set('view engine','ejs');
/* GET home page. */
async function main(){
  await db.connect();
}
main().catch((error)=>{
  console.log(error);
});
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
app.post("/Employee/Create.html",(req,res)=>{
  async function main() {
    
  
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phno = req.body.phno;
    const password = req.body.password;
  
    await db.createUser(fullname, email,phno,password);
  
   
    res.write("<script language='javascript'>window.alert('You have succesfully created a entry');window.location.href='/Employee/Create.html'</script>");
    res.end();
  }
  main().catch((error) => {
    console.error('Application error:', error);
  });
});
app.get("/Employee/Search.ejs",async (req,res)=>{

async function read(){try{  
  
  

  table_row= await db.readTable();
  
  
 
  res.render(__dirname+"/public/Employee/Search.ejs",{table_row});


}
catch(error){
  console.error(error);
}}
read().catch((er)=>{
  console.error(er);
});
});


app.listen(process.env.PORT||3000,()=>{
  console.log("Server is running succesfully");
});

 // Adjust the path as needed

