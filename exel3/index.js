const express = require('express')
const app = express()
const porta = 8080;
const dados = require('./dados.json')

// const dados = ['ff 1','ff 2','ff 3']

app.use(express.json())

app.get('/', function (req, res) {
    res.status(200)
    res.json(dados)
})

app.get('/:id', function (req, res) {
    let index = req.params.id
    res.status(200)
    res.send(dados[index])
})





app.put('/:id', function (req, res) {
    let index = req.params.id
    res.status(200)
    res.send(dados[index])
})

app.post('/', function (req, res) {
    dados.post(req.body)
    // console.log(req.body)
    res.status(201)
    res.send('POST')
  })

app.listen(porta, () =>{
    console.log("Servidor em operação ...")
})