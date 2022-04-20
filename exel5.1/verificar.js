const mysql = require('mysql2');
const express = require('express')
const app = express()
const porta = 8888;

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database:'pwbezile',});


const nomes = [
    "Gigantes de aço", 
    'ação', 
    'Shawn Levy', 
    2011
]


app.get('/:nomes', function (req, res) {
  res.status(200)
  res.json(nomes)
})

app.listen(porta, () =>{
  console.log("Servidor em operação ...")
  console.log(porta)
  console.log(nomes)
})

let filmes = 'SELECT * FROM filmes'

// connection.query(filmes, nomes,function(err, result){

//     if(err) throw err
//     console.log(result[0].titulo)
// })