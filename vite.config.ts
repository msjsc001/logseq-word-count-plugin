import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'esbuild',
    lib: {
      entry: 'index.ts',
      formats: ['iife'],
      name: 'WordCountPlugin',
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['@logseq/libs'],
      output: {
        globals: {
          '@logseq/libs': 'LogseqApi',
        },
      },
    },
  },
})
