const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

let sql = 'CREATE DATABASE pwbezile'
connection.query(sql, function(err, _result){
    if (err) throw err
    console.log("conectado")
})





