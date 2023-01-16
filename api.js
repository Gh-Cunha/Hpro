var http = require('http')
var url = require('url')

function server(request, response){


    if(request.method === 'POST'){

        var body = ''
        request.on('data', function(data){

           body = body + data

        })

        request.on('end', function (){

            var dados = JSON.parse(body)
            console.log(dados)
            response.writeHead(200, {'Content-Type': 'application/json'})
            response.write('teste')
            response.end()
            
        })
    
    }  

    if(request.method === 'GET'){

        var parts = url.parse(request.url, true)

       
        if(parts.pathname === '/hpro'){

            var query = parts.query
            console.log(query.nome, query.idade)
        
            response.writeHead(200, {'Content-Type': 'application/json'})
            response.write(query.nome + ' ' + query.idade)
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
 