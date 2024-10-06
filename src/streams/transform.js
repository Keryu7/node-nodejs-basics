import { Transform } from 'stream';

const reverse = new Transform({
    transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        this.push(reversedChunk);
        callback();
    }
});

const transform = () => {
    console.log('Enter data to write to the file. Press Ctrl+D to finish.');
    process.stdin.pipe(reverse).pipe(process.stdout);
    reverse.on('finish', () => {
        console.log('\nTransform complete.');
    });
    reverse.on('error', (error) => {
        console.error(`Error: ${error.message}`);
    });
};

await transform();