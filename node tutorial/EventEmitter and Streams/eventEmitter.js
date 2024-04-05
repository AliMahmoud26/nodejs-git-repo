const EventEmitter = require('events');

// Instances of the EventEmitter
const myEmitter  = new EventEmitter();
const customeEmitter = new EventEmitter();

// myEmitter
myEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
})
myEmitter.emit('greet', 'John')

// customEmitter
customeEmitter.on('response', (msg) => {
    console.log(`${msg}`);
})
customeEmitter.emit('response', 'This is the response message on the previous emitter')