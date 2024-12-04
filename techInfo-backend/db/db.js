const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sasuke@8439141889',
  database: 'todo_app',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    process.exit(1);
  }
  console.log('Database is Connected');
});

module.exports = db;
