import { spawn } from 'child_process';

export const spawnChildProcess = (args) => {
    const child = spawn('node', ['./files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit'],
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
    child.on('error', (error) => {
        console.error(`Error while spawning child process: ${error.message}`);
    });
};

spawnChildProcess(  ['someArgument1', 'someArgument2', 'someArgument2']);
