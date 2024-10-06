import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {
    const filePath = path.join(process.cwd(), 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, content, 'utf8');
            console.log('File created successfully');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await create();
