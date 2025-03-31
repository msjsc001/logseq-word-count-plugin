import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'esbuild',
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'index.js'), // 或者'index.ts'
      formats: ['cjs'],
      fileName: () => 'index.js'
    },
    rollupOptions: {
      external: ['@logseq/libs']
    }
  }
});