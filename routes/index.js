var express = require('express');

const app = express();
/* GET home page. */

//app.use(express.static(__dirname+'/public'));
//app.use(bodyParser.urlencoded({extended: false}));

/*app.get("/",(res,req)=>{
  res.sendFile(__dirname+"index.html");
});
*/

app.listen(process.env.PORT||3000,()=>{
  res.send("Server is running succesfully");
});
module.exports = router;
