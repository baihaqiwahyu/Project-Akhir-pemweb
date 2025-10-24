const mysql = require('mysql2');

// Sesuaikan dengan username, password, database-mu
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',        // isi jika ada password
  database: 'bokong_barbershop'
});

// Tes koneksi
db.connect((err) => {
  if(err){
    console.log('Database connection failed:', err);
  } else {
    console.log('Database connected!');
  }
});

module.exports = db;
