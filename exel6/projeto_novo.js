const mysql = require('mysql');
const express = require('express');
var app = express();

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'senai',
    multipleStatements: true});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Conexão estabelecida.');
    else
        console.log('Conexão falhou \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Servidor em operaçao na porta : 3000'));



// metodo get
app.use(express.json())
app.get('/', function (req, res) {
    res.status(200)
    let dados = 'SELECT * FROM alunos_info'
    mysqlConnection.query(dados, function(err, result){
      if(err) throw err
      console.log(result)
      res.json(result)
    })       
})

// metodo delete
app.delete('/:matricula', function (req, res) {
    var index = req.params.matricula
    var dados = `delete from alunos_info where matricula = ${index}`
    mysqlConnection.query(dados, function(err, result){
      if(err) throw err
      console.log(result)
      res.json(result)
    })   
    res.status(200)
    res.send(`O dado com id:${index} foi deletado`)
  })

//Update  
app.put('/PUT', (req, res) => {
    let emp = req.body;
    var sql = "SET @Matricula = ?;SET @CPF = ?;SET @Nome = ?;SET @idade = ?; \
    CALL ADDouEditar(@Matricula,@CPF,@Nome,@idade);";
    mysqlConnection.query(sql, [emp.Matricula, emp.CPF, emp.Nome, emp.idade], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});

//Post  
post('/post', function (req, res) {

    res.status(201)
    let mudanca = Object.values(req.body);
    console.log(mudanca)
    let sqlf = 'INSERT INTO alunos_info VALUES (?,?,?,?)'
    mysqlConnection.query(sqlf,mudanca, function(err, result){
    if(err) throw err
    console.log('Conectado')
    console.log('dado adicionado')
  })
  res.send(`O dado foi adicionado`)
})
