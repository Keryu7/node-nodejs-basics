import fs from 'fs';
import path from 'path';

const write = () => {
    const filePath = path.join(process.cwd(), 'files', 'fileToWrite.txt');
    const stream = fs.createWriteStream(filePath, { encoding: 'utf8' });

    console.log('Enter data to write to the file. Press Ctrl+D to finish.');
    process.stdin.pipe(stream);
    stream.on('finish', () => {
        console.log(`\nData has been written to ${filePath}`);
    });
    stream.on('error', (error) => {
        console.error(`Error while writing file: ${error.message}`);
    });
};

await write();