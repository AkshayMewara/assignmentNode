import fs from 'fs';

var data = "";

var readStream = fs.createReadStream('first.txt');

readStream.setEncoding('UTF8');

readStream.on('data',function(chunk){
    data += chunk;
});

readStream.on('end', function(){
    console.log(data);
});

readStream.on('error', function(err){
    console.log(err);
});

console.log("program ended");