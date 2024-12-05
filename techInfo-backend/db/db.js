const mysql = require('mysql2/promise');

const pool = mysql.createPool({  
  host: 'localhost',    
  user: 'root',
  password: 'Sasuke@8439141889',
  database: 'todo_app',
});  

module.exports = pool;
