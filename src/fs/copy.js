import { promises as fs } from 'fs';
import path from 'path';

const copy = async () => {
    const sourceDir = path.join(process.cwd(), 'files');
    const destDir = path.join(process.cwd(), 'files_copy');

    try {
        await fs.access(sourceDir);
        try {
            await fs.access(destDir);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }
        await fs.cp(sourceDir, destDir, { recursive: true });
        console.log('Successfully copied folder');

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

copy();