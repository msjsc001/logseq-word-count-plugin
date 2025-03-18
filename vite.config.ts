import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'esbuild',
    lib: {
      entry: 'index.ts',
      formats: ['iife'],
      name: 'WordCount'
    }
  }
}) 