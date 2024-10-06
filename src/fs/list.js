import { promises as fs } from 'fs';
import path from 'path';

const list = async () => {
    const dirPath = path.join(process.cwd(), 'files');

    try {
        await fs.access(dirPath);
        const files = await fs.readdir(dirPath);
        files.forEach(file => {
            console.log(file);
        });

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();