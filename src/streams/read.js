import fs from 'fs';
import path from 'path';

const read = () => {
    const filePath = path.join(process.cwd(), 'files', 'fileToRead.txt');
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })
    stream.on('end', () => {
        console.log('\nReading complete.');
    });
    stream.on('error', (error) => {
        console.error(`Error while reading file: ${error.message}`);
    });
};

await read();