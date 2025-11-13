# Image Processor - Node.js

## Overview
This project is a **Node.js-based image processing system** that demonstrates how to perform computationally intensive image manipulations efficiently using:
- **Jimp** for image processing.
- **Worker Threads** for parallel task execution.
- **Promises** and `Promise.all()` for asynchronous performance optimization.

The program processes a set of sample images by applying several transformations (like blur, resize, and grayscale) while also measuring the time taken for each operation - both in sequential and parallel modes.

---

## Features

- 🔹 **Image Manipulations using Jimp**
  - Blur  
  - Resize  
  - Grayscale  

- 🔹 **Performance Measurement**
  - Logs the time taken for transformation of images.  
  - Compares sequential vs. parallel processing time.

- 🔹 **Parallel Execution using Worker Threads**
  - Utilizes Node.js Worker Threads to handle image tasks concurrently.  
  - Demonstrates significant reduction in total processing time.

- 🔹 **Asynchronous Workflow**
  - Uses Promises and `Promise.all()` to run multiple tasks simultaneously.

---

## Tech Stack

| Component | Description |
|------------|-------------|
| **Node.js** | Runtime environment |
| **Jimp** | Image processing library |
| **Worker Threads** | For parallel execution |
| **Promises / async-await** | For managing async workflows |

---


