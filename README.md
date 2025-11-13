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
## Outputs in the respective cases
<img width="287" height="156" alt="image" src="https://github.com/user-attachments/assets/0b32b510-0122-4dc9-8d00-9dd0b60fc37b" />
<img width="284" height="158" alt="image" src="https://github.com/user-attachments/assets/cff8a432-c127-4de4-a698-e5a7ee02e1db" />





