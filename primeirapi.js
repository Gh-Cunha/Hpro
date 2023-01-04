let http = require('http')

function server(request, response){

    if(request.method === 'POST'){
        response.writeHead(200, {'Content-Type': 'application/json'})
            response.write('Você postou kk')
            response.end()
    }

    if(request.method === 'GET'){
       
        if(request.url === '/hpro'){
            
            response.writeHead(200, {'Content-Type': 'application/json'})
            response.write('Olá Mephyrus')
            response.end()
        }
       
        else if(request.url === '/gpro'){
           
            response.writeHead(200, {'Content-Type': 'application/json'})
            response.write('Olá Nephyr')
            response.end()
        }

        else{
            response.writeHead(404)
            response.write('Infelizmente não encontramos')
            response.end()
        }
    }
}

http.createServer(server).listen(2000)
 