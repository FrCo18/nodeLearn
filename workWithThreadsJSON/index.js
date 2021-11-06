let http = require('http');

let server = http.createServer(function(req, res){
    console.log('URL страницы:' + req.url)
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})

    let obj = {
        model: 'Audi',
        speed: '234.5',
        wheels: 4
    }

    res.end(JSON.stringify(obj))
})

server.listen(3000, '127.0.0.1')
console.log('Отслеживается порт 3000')