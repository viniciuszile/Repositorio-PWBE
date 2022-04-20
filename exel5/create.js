const mysql = require('mysql2');

// criando a conexão com o banco de dados

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database:'pwbezile',
  
  });


const colunas = [ 'titulo VARCHAR(50) NOT NULL',

                  'genero VARCHAR(30) NOT NULL',

                  'diretor VARCHAR(60) NOT NULL',

                  'ano_lancamento INT NOT NULL',

                  'PRIMARY KEY(titulo)'

                ]

let sql = `CREATE TABLE filmes(${colunas})`

connection.query(sql, function(err, result){

  if(err) throw err

  console.log('Conectado')
})





