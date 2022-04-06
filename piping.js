import fs from 'fs';

var readerStream = fs.createReadStream('second.txt');

var writerStream = fs.createWriteStream('third.txt');

readerStream.pipe(writerStream);

console.log('Program Ended');
