const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// event wait till it fires
myEmitter.on('waterfull', () => {
  console.log('Turn of the motor!');
  setTimeout(()=>{
    console.log('Turn of the motor!, Its a gentle reminder');
  },3000);
});

console.log('RUMN');

// event fire
myEmitter.emit('waterfull');
