var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'dpg-ckda45djhfbs73a9bcn0-a',
  user     : 'employee_table_user',
  password : 'hU1mepG8tiJes6oe8MlHMlpLIrUAFts5',
  database : 'employee_table'
});
 

 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
