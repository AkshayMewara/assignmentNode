import fs from 'fs';
import zlib from 'zlib';

fs.createReadStream('first.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('first.txt'));

console.log("File Decompressed");