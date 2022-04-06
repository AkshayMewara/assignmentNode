import fs from 'fs';
import zlib from 'zlib';

fs.createReadStream('first.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('first.txt.gz'));

console.log("File Compressed");
