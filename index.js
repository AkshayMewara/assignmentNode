import events from 'events'

const eventEmitter = new events.EventEmitter();

eventEmitter.on('hello', function(data){
    console.log("inside eventEmitter.on",data);
});

eventEmitter.on('hel', function(data){
    console.log("inside eventEmitter.on",data);
});




setTimeout(()=>{
    eventEmitter.emit('hello',"this will also displayed in output");
},1000);


setTimeout(()=>{
    eventEmitter.emit('hel',"this will also displayed in output 1");
},2000);