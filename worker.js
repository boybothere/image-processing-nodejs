import { parentPort, workerData } from "node:worker_threads";
import path from "node:path";
import { Jimp } from "jimp";
import { mkdir, readFile } from "fs/promises";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.join(__dirname, 'multi-threaded-output');

async function processImage() {
    const { imagePath, filename } = workerData;

    const outputSubDirPath = path.join(OUTPUT_DIR, filename.split('.')[0]);
    await mkdir(outputSubDirPath, { recursive: true });

    const fileBuffer = await readFile(imagePath);
    const image = await Jimp.read(fileBuffer);
    const tasks = [
        {
            name: 'thumbnail',
            operation: async () => {
                const cloned = image.clone();
                cloned.resize({ w: 150, h: 150 });
                await cloned.write(path.join(outputSubDirPath, 'thumbnail.jpeg'));
            }
        }, {
            name: 'small',
            operation: async () => {
                const cloned = image.clone();
                cloned.resize({ w: 300, h: 300 });
                await cloned.write(path.join(outputSubDirPath, 'small.jpeg'));
            }
        }, {
            name: 'medium',
            operation: async () => {
                const cloned = image.clone();
                cloned.resize({ w: 600, h: 600 });
                await cloned.write(path.join(outputSubDirPath, 'medium.jpeg'));
            }
        }, {
            name: 'large',
            operation: async () => {
                const cloned = image.clone();
                cloned.resize({ w: 1200, h: 1200 });
                await cloned.write(path.join(outputSubDirPath, 'small.jpeg'));
            }
        }, {
            name: 'greyscale',
            operation: async () => {
                const cloned = image.clone();
                cloned.greyscale();
                await cloned.write(path.join(outputSubDirPath, 'greyscale.jpeg'));
            }
        },
        {
            name: 'blur',
            operation: async () => {
                const cloned = image.clone();
                cloned.blur(5);
                await cloned.write(path.join(outputSubDirPath, 'blur.jpeg'));
            }
        }
    ];

    for (const task of tasks) {
        await task.operation();
    }
    parentPort.postMessage({
        success: true,
        filename
    })
}

processImage();