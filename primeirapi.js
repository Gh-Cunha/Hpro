// Primeira API
// uso do modo interno do node o http

let http = require('http')

function server(request, response){

    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write('Olá Mundo!')
    response.end()

}

http.createServer(server).listen(2000)
