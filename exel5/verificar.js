const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database:'pwbezile',
    // table: 'filmes',
  
  });

const nomes = [
    "Gigantes de aço", 
    'ação', 
    'Shawn Levy', 
    2011
]


let filmes = 'SELECT * FROM filmes'

connection.query(filmes, nomes,function(err, result){

    if(err) throw err
    console.log(result[0].titulo)
  })