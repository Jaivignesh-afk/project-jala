var express = require('express');

const app = express();
/* GET home page. */

app.use(express.static(__dirname+'/public'));
//app.use(bodyParser.urlencoded({extended: false}));

app.get("/",(res,req)=>{
  res.sendfile(__dirname+"index.html");
});

app.listen(process.env.PORT||3000,()=>{
  console.log("Server is running succesfully");
});

