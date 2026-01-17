---
description: How to run the Next.js portfolio project
---

To run this project, you need to have **Node.js** installed on your system.

### 1. Install Dependencies
If you haven't already, install the project dependencies:
```bash
npm install
```

### 2. Development Mode
To start the development server with hot-reloading (changes reflect instantly):
// turbo
```bash
npm run dev
```
> [!NOTE]
> The project is currently configured to run on port **3001** (via `npx next dev -p 3001`).

### 3. Production Build & Run
To test the production-optimized version (recommended for final performance verification):
1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Start the production server**:
   ```bash
   npm start
   ```

### 4. Code Quality
To run the linter and check for code issues:
```bash
npm run lint
```
