let http = require('http');

let server = http.createServer(function (req, res) {
    console.log("URL страницы: " + req.url);
    res.writeHead(200, { 'content-type': 'text/plain; charset=utf8' });
    res.end('Привет мир!');
});

server.listen(3000, '127.0.0.1');
console.log('Отслеживается порт 3000');