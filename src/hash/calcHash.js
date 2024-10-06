import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

const calculateHash = async () => {
    const filePath = path.join(process.cwd(), 'files', 'fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });
    stream.on('end', () => {
        const result = hash.digest('hex');
        console.log(`SHA256 hash for file ${filePath}: ${result}`);
    });
    stream.on('error', (error) => {
        console.error(`Error while reading file: ${error.message}`);
    });
};

await calculateHash();