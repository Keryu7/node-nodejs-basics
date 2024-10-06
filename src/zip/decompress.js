import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const decompress = () => {
    const inputFilePath = path.join(process.cwd(), 'files', 'archive.gz');
    const outputFilePath = path.join(process.cwd(), 'files', 'fileToCompress.txt');
    const readStream = fs.createReadStream(inputFilePath);
    const gunzip = zlib.createGunzip();
    const writeStream = fs.createWriteStream(outputFilePath);

    readStream
        .pipe(gunzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log('File has been decompressed to fileToCompress.txt');
        })
        .on('error', (error) => {
            console.error(`Error: ${error.message}`);
        });
};

await decompress();