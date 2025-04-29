// Load environment variables from .env file
require('dotenv').config();

const mysql = require('mysql2');

// Create a connection to the database using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,          // Database host
  user: process.env.DB_USER,          // Database username
  password: process.env.DB_PASSWORD,  // Database password
  database: process.env.DB_NAME       // Database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Export the connection
module.exports = connection;
