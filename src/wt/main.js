import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numCPUs = os.cpus().length;
    let number = 10;
    const results = [];
    const promises = [];

    for (let i = 0; i < numCPUs; i++) {
        promises.push(new Promise((resolve) => {
            const worker = new Worker('./worker.js');
            worker.postMessage(number);
            worker.on('message', (result) => {
                results[i] = result;
                resolve();
            });
            worker.on('error', () => {
                results[i] = { status: 'error', data: null };
                resolve();
            });
            number++;
        }));
    }
    await Promise.all(promises);
    console.log(results);
};

await performCalculations();
