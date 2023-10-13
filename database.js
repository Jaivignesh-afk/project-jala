
 
// db.js

const { Client } = require('pg');

const client = new Client({
  user: 'employee_table_user',
  host: 'dpg-ckda45djhfbs73a9bcn0-a.singapore-postgres.render.com',
  database: 'employee_table',
  password: 'hU1mepG8tiJes6oe8MlHMlpLIrUAFts5',
  port: 5432, // Default PostgreSQL port
  ssl:true,
});


async function connect() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database', error);
  }
}

async function createUser(fullname, email,phno,password,sno) {
  const query = `
    INSERT INTO employees.test(fullname, email,phno,password,sno)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *;
  `;

  const values = [fullname, email,phno,password,sno];

  try {
    const result = await client.query(query, values);
    console.log('User saved to the database:', result.rows[0]);
  } catch (error) {
    console.error('Error saving user to the database', error);
  }
}
async function readTable(){
  
  try {
    const query = `SELECT * FROM employees.test;`; 
    const result =  await client.query(query);
   
    return result.rows;
     // Send the entries as JSON to the web page
  } catch (error) {
    console.error('Error fetching data:', error);
    
  }
}

async function update(key,value,sno){
  try{
  

   const query = `UPDATE employees.test SET ${key}='${value}' WHERE sno=${sno};`;
  
    const result = await client.query(query);
  console.log('User saved to the database:', result.rows[0]);
} catch (error) {
  console.error('Error saving user to the database', error);
}
}
async function del(id){
  try{
    const query = `DELETE FROM employees.test WHERE sno=${id};`;
  const result = await client.query(query);
  
} catch (error) {
  console.error('Error saving user to the database', error);
}
  
}
async function close() {
  try {
    await client.end();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing database connection', error);
  }
}

module.exports = {
  connect,
  createUser,
  readTable,
  update,
  del,
  close,
};
