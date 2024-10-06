import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const compress = () => {
    const inputFilePath = path.join(process.cwd(), 'files', 'fileToCompress.txt');
    const outputFilePath = path.join(process.cwd(), 'files', 'archive.gz');
    const readStream = fs.createReadStream(inputFilePath);
    const gzip = zlib.createGzip();
    const writeStream = fs.createWriteStream(outputFilePath);

    readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log('File has been compressed to archive.gz');
        })
        .on('error', (error) => {
            console.error(`Error: ${error.message}`);
        });
};

await compress();