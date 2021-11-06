let express = require('express')
let app = express()
let server = require('http').createServer(app)
let ioClass = require('socket.io')

let io = ioClass(server)

server.listen(3000)

app.get('/', function (request, responce) {
    responce.sendFile(__dirname + '/index.html')
})

users = []
connections = []

io.sockets.on('connection', function (socket) {
    console.log('Успешное соединение')
    connections.push(socket)

    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1)
        console.log('Успешное отключение')
    })

    socket.on('send mess', function (data) {
        io.sockets.emit('add mess', { msg: data.mess, name: data.name, className: data.className})
    })
})


