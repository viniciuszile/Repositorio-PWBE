const http = require('http'); // importando o módulo http

const porta = 8080;

//create a server object:

const servidor = http.createServer(function (request, response) {

  if (request.url == '/favicon.ico'){

      response.write('Filmes');

        console.log(request.url)

  }



  response.write('Hello World!'); //write a response to the client

  response.end(); //end the response

})



servidor.listen(porta, () =>{

    console.log("Servidor em operação ...")

}); //the server object listens on port 8080