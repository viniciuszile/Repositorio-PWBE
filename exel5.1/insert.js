const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database:'pwbezile',
    // table: 'filmes',
  
  });

const nomes = [
    "The Batman", 
    'ação', 
    'Matt Reeves', 
    2021
]


let filmes = 'INSERT INTO filmes VALUE (?, ?, ? ,?)'

connection.query(filmes, nomes,function(err, result){

    if(err) throw err
  
    console.log('Feito')
  })