let event = require('events');

let my_emit = new event.EventEmitter()

my_emit.on('some_event', function( text ){
    console.log(text);
})

my_emit.emit('some_event', 'Test');