import fs from 'fs';

var data = 'this my data';

var writerStream = fs.createWriteStream('second.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function(){
    console.log("complete");
});

writerStream.on('error', function(err){
    console.log(err);
});

console.log("program Ended");