const express = require('express')
const app = express()
const porta = 8080;

const filmes = [
    {id:0 ,'filme':'ff 1'},
    {id:1 ,'filme':'ff 2'},
    {id:2 ,'filme':'ff 3'}
]

// const filmes = ['ff 1','ff 2','ff 3']

app.use(express.json())

app.get('/', function (req, res) {
    res.status(200)
    res.json(filmes)
})

app.get('/:id', function (req, res) {
    let index = req.params.id
    res.status(200)
    res.send(filmes[index])
})

app.put('/:id', function (req, res) {
    let index = req.params.id
    res.status(200)
    res.send(filmes[index])
})

app.post('/', function (req, res) {
    filmes.post(req.body)
    // console.log(req.body)
    res.status(201)
    res.send('POST')
  })

app.listen(porta, () =>{
    console.log("Servidor em operação ...")
})