import events from 'events'

const eventEmitter = new events.EventEmitter();

eventEmitter.on('asd',function(){
    console.log("inside asd eventEmitter.on");

    eventEmitter.emit('zxc');
});

eventEmitter.on('zxc',function(){
    console.log("inside zxc eventEmitter.on");
});


eventEmitter.emit('asd');




