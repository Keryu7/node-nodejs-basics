import { promises as fs } from 'fs';
import path from 'path';

const read = async () => {
    const filePath = path.join(process.cwd(), 'files', 'fileToRead.txt');

    try {
        await fs.access(filePath);
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();