const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.json())

const porta = 8080
const path = 'dados.json'

function coletaDados(){
    var dados = fs.readFileSync(path, {encoding:'utf8'})
    return JSON.parse(dados)
}

function atualizaDados(novosDados){
    fs.writeFileSync(path, JSON.stringify(novosDados))
}

app.get('/', function(req, res){
    res.status(200).send(coletaDados())
})

app.get('/:id', function(req, res){
    let index = req.params.id
    res.status(200).send(coletaDados()[index])
})

app.post('/', function(req, res){
    let dadosAtuais = coletaDados()
    let size = Object.keys(dadosAtuais).length;
    let idDados = size + 1

    dadosAtuais[idDados] = req.body
    atualizaDados(dadosAtuais)

    res.status(200).send("Novo dado add")

})

app.put('/:id', function(req, res){
    let index = req.params.id
    let dadosAtuais = coletaDados()

    // condition ? true_expression : false_expression
    req.body.username     === undefined ? "" : dadosAtuais[index].username = req.body.username
    req.body.email    === undefined ? "" : dadosAtuais[index].email = req.body.email
    req.body.password === undefined ? "" : dadosAtuais[index].password = req.body.password


    atualizaDados(dadosAtuais)
    res.status(200).send("Dado modificado")
})

app.delete('/', function(req, res){

    let dadosAtuais = coletaDados()
    let size = Object.keys(dadosAtuais).length;

    delete Object.keys(dadosAtuais)[size]

    atualizaDados(dadosAtuais)
    res.status(200).send("Dado deletado")
})

app.delete('/:id', function(req, res){
    let index = req.params.id
    let dadosAtuais = coletaDados()

    delete dadosAtuais[index]

    atualizaDados(dadosAtuais)
    res.status(200).send("Dado deletado")
})

app.listen(porta,() => {
    console.log('Servidor em operação ...')
})
