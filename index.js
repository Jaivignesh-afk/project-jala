var express = require('express');

const app = express();
/* GET home page. */

app.use(express.static(__dirname+'public'));
//app.use(bodyParser.urlencoded({extended: false}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/Account/Admin.html",(req,res)=>{
  res.sendFile(__dirname+"/public/Account/Admin.html");
});
app.listen(process.env.PORT||3000,()=>{
  console.log("Server is running succesfully");
});

