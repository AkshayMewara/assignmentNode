import events from 'events';
 const eventEmitter = new events.EventEmitter();

function listener1 (){
    console.log("listener 1");
};

function listener2 (){
    console.log("listener 2");
};

eventEmitter.addListener('hello',listener1);

eventEmitter.on('hello',listener2);

// eventEmitter.emit('hello');


var eventListener = events.EventEmitter.listenerCount(eventEmitter,'hello');

console.log(eventListener);


eventEmitter.emit('hello');


eventEmitter.removeListener('hello',listener1);

var eventListener = events.EventEmitter.listenerCount(eventEmitter,'hello');

console.log(eventListener);


eventEmitter.emit('hello');

