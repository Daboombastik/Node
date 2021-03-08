const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', number => {
    console.log(`started ${number}`)
})

eventEmitter.emit('start', 23);


//multiple arguments

eventEmitter.on('start multiple', (start, end) => {
    console.log(`started from ${start} to ${end}`)
})

eventEmitter.emit('start multiple', 1, 100);

// once(): add a one-time listener
// removeListener() / off(): remove an event listener from an event
// removeAllListeners(): remove all listeners for an event
