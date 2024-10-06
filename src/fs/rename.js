import { promises as fs } from 'fs';
import path from 'path';

const renameFile = async () => {
    const wrongFilePath = path.join(process.cwd(), 'files', 'wrongFilename.txt');
    const properFilePath = path.join(process.cwd(), 'files', 'properFilename.md');

    try {
        await fs.access(wrongFilePath);
        try {
            await fs.access(properFilePath);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }

        await fs.rename(wrongFilePath, properFilePath);
        console.log('File renamed successfully');

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

renameFile();