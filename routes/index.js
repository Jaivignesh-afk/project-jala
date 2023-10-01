var express = require('express');

const app = express();
/* GET home page. */

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
const email = req.body.name;
const password = req.body.password;
app.get("/",(res,req)=>{
  res.sendFile(__dirname+"index.html");
});

app.post("/",(res,req)=>{
  res.sendFile(__dirname+"Admin.html");
});
app.get("/",(res,req)=>{
  
  if(email=="training@jalaacademy.com" && password=="jobprogram"){
    //Hi
  }else{
    alert("Enter the correct credentials");
  }
});
app.listen(process.env.PORT||3000);
module.exports = router;
