const mysql = require('mysql2');

// Create a MySQL pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'lms',
  waitForConnections: true,
  connectionLimit: 10, // Adjust this based on your requirements
});

// Promisify the query method to use async/await
const promisePool = pool.promise();

module.exports = promisePool;
