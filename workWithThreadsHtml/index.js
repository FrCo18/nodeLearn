let fs = require('fs');

let myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf-8');
let myWriteShort = fs.createWriteStream(__dirname + '/news.txt', 'utf8');

myReadShort.pipe(myWriteShort);

let http = require('http');

let server = http.createServer(function(req, res){
    console.log('URL страницы:' + req.url)
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
    let myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8')
    myReadShort.pipe(res)
})

server.listen(3000, '127.0.0.1')
console.log('Отслеживается порт 3000')