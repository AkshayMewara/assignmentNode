import events from'events';

const eventEmitter = new events.EventEmitter();

eventEmitter.on('asd',function(){
    console.log("asd1");
});

eventEmitter.on('asd',function(){
    console.log('asd2');
});

// eventEmitter.emit('asd');

eventEmitter.listeners('asd');