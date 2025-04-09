import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5000;

console.log('Starting Vite development server...');

const command = `npx vite --port ${PORT} --host 0.0.0.0`;

const viteProcess = exec(command, {
  cwd: __dirname,
  env: {
    ...process.env,
    PORT: PORT.toString()
  }
});

viteProcess.stdout.pipe(process.stdout);
viteProcess.stderr.pipe(process.stderr);

viteProcess.on('error', (error) => {
  console.error(`Failed to start Vite: ${error.message}`);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Vite exited with code ${code}`);
    process.exit(code);
  }
});

process.on('SIGINT', () => {
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  viteProcess.kill('SIGTERM');
});